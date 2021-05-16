const glob = require('glob');
const path = require('path');

const PAGE_ROOT = 'src/pages/';

const pages = glob.sync(`**/*.tsx`, {
  ignore: `**/_*.tsx`,
  cwd: PAGE_ROOT
}).map((page) => {
  const fileExt = path.extname(page);
  const dist = page.replace(new RegExp(fileExt + '$'), '.html');
  return {
    template: path.join(PAGE_ROOT, page),
    filename: path.join('dist', dist),
  }
});

module.exports = pages;
