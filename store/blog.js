const SET_RECENT_BLOG = 'SET_RECENT_BLOG';
const SET_RECENT_BLOGS = 'SET_RECENT_BLOGS';

export const state = () => ({
  recentBlog: {},
  recentBlogs: [],
});

export const mutations = {
  [SET_RECENT_BLOG](state, payload) {
    state.recentBlog = payload;
  },
  [SET_RECENT_BLOGS](state, payload) {
    state.recentBlogs = payload;
  },
};

export const actions = {
  setRecentBlog({ commit }, payload) {
    commit(SET_RECENT_BLOG, payload);
  },
  setRecentBlogs({ commit }, payload) {
    commit(SET_RECENT_BLOGS, payload);
  },
};

export const getters = {
  recentTidbits4(state) {
    return state.recentBlogs.slice(0, 4);
  },
};
