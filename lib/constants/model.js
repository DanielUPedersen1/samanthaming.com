export const RECENT_DATA_LIMIT = 10;

// TIDBITS
export const BANNED_TIDBITS = [1, 2, 3, 5, 6, 7, 8, 9, 10, 14, 15, 16, 19, 22];
export const TOP_TIDBIT_SLUGS = [
  '79-module-cheatsheet',
  '77-html-kbd-tag',
  '84-2-ways-to-center-elements-with-flexbox',
  '86-window-location-cheatsheet',
  '72-css-empty-selector',
  '70-3-ways-to-clone-objects',
  '35-es6-way-to-clone-an-array',
  '76-converting-object-to-array',
  '70-3-ways-to-clone-objects',
  '49-2-ways-to-merge-arrays',
  '33-how-to-compare-2-objects',
  '11-setting-default-parameters',
  '19-2-ways-to-convert-to-boolean',
  '13-skip-values-in-destructuring',
  '4-declaring-css-variables',
  // TODO: delete after all tidbits imported
  '12-split-string-using-spread',
  '14-combine-multiple-arrays-using-spread',
  '15-4-ways-to-combine-strings',
  '17-print-ranges-natively',
  '23-no-else-return',
];

// BLOG
export const TOP_BLOG_SLUGS = [
  'how-i-got-my-first-developer-job-without-a-cs-degree',
  '3-tips-to-improve-your-programming-skills',
  'how-to-ace-the-developer-interview',
  'tips-to-optimize-your-linkedin-profile-for-developers',
  '3-tips-to-find-the-right-bootcamp-for-you',
];

// COURSE
export const COURSES_DATA = {
  flexbox30: {
    title: 'Flexbox30',
    slug: 'flexbox30',
    path: '/flexbox30',
    description: 'Learn Flexbox with 30 Code Tidbits ✨',
    size: 31, // Replace once this issue has been resolved, which we make an API call for the length: https://github.com/nuxt/content/issues/378
  },
  codetidbits30: {
    title: 'CodeTidbits30',
    slug: 'codetidbits30',
    path: '/codetidbits30',
    description: '30 days of the best JS, CSS, HTML tidbits 🎄',
    size: 30,
  },
  basics: {
    title: 'Web Basics',
    slug: 'basics',
    path: '/basics',
    description: 'Web Basics Explained with Tidbits 🍎',
    size: 11,
  },
  pictorials: {
    title: 'Pictorials',
    slug: 'pictorials',
    path: '/pictorials',
    description: 'Step by Step Code Tutorials 👣',
    size: 6,
  },
};
