const BROWSER_SYNC = {
  files: [
    `dist/assets/**/*`,
    `dist/**/*.html`,
  ],
  ghostMode: {
    clicks: false,
    scroll: false,
    forms: false
  },
  server: {
    baseDir: 'dist',
    middleware: [],
  },
  logFileChanges: false
};

module.exports = BROWSER_SYNC;
