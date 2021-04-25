import _groupBy from 'lodash/groupBy';
import { getRandomOrder } from '../utils/model';

export class Lesson {
  static async fetchRecent({ content, contentPath }) {
    const [recentLesson] = await content(contentPath)
      .only(['title', 'path', 'slug', 'order'])
      .where({ order: { $eq: 1 } })
      .fetch();

    return recentLesson;
  }

  static async fetchAll({ content, contentPath }) {
    return await content(contentPath)
      .sortBy('order')
      .only(['path', 'title', 'order'])
      .fetch();
  }

  static async fetchChunks({ content, contentPath, sections }) {
    const results = await content(contentPath)
      .sortBy('order')
      .only(['slug', 'path', 'title', 'order', 'section'])
      .fetch();

    const group = _groupBy(results, 'section');
    return sections.map((section) => [section, group[section]]);
  }

  static async fetchRandom({ content, contentPath, size }) {
    const randomOrders = getRandomOrder(size);

    return await content(contentPath)
      .only(['slug', 'path', 'title', 'order'])
      .where({ order: { $in: randomOrders } })
      .fetch();
  }

  static async dispatchRecent({
    content,
    contentPath,
    store,
    stateName,
    dispatchType,
  }) {
    if (store.state.course[stateName]) {
      return;
    }

    const recentLesson = await this.fetchRecent({ content, contentPath });

    store.dispatch(dispatchType, recentLesson);
    return recentLesson;
  }

  static async dispatchAll({
    content,
    contentPath,
    store,
    stateName,
    dispatchType,
  }) {
    if (store.state.course[stateName].length) {
      return;
    }

    const recentLessons = await this.fetchAll({ content, contentPath });

    store.dispatch(dispatchType, recentLessons);
    return recentLessons;
  }

  static async dispatchRandom({
    content,
    contentPath,
    store,
    stateName,
    dispatchType,
    size,
  }) {
    if (store.state.course[stateName].length) {
      return;
    }

    const results = await this.fetchRandom({ content, contentPath, size });

    store.dispatch(dispatchType, results);
    return results;
  }

  /**
   * This will return next pagination that starts over
   * "next" will return the next content (standard behaviour)
   * but will return first content if at the end instead of null
   * "prev" remains unchanged
   *
   */
  static async fetchPrevNext({
    content,
    contentPath,
    params,
    store,
    stateName,
    dispatchType,
  }) {
    // fetch prev and next of content
    const paginations = await content(contentPath)
      .only(['title', 'slug', 'order'])
      .sortBy('order')
      .surround(params.slug)
      .fetch();

    const prev = paginations[0];
    let next = paginations[1];

    // fetch first content
    if (!next) {
      next = await this.dispatchRecent({
        content,
        contentPath,
        store,
        stateName,
        dispatchType,
      });
    }

    return {
      prev,
      next,
    };
  }
}
