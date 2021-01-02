const glob = require('glob');
const path = require('path');

const PAGE_ROOT = 'src/pages/';

const pages = glob.sync(`**/*.tsx`, {
  ignore: `**/_*.tsx`,
  cwd: PAGE_ROOT
}).map((currentPagePath) => {
  const pageCurrentPath = PAGE_ROOT + currentPagePath.replace(/(?!.*\/).+\.tsx$/, '');
  const relativePath = `${path.relative(pageCurrentPath, PAGE_ROOT) || '.'}/`;
  const currentPageHTMLPath = currentPagePath.replace(/tsx$/, 'html')
  return {
    template: PAGE_ROOT + currentPagePath,
    filename: 'dist/' + currentPageHTMLPath,
    relativePath
  }
});

module.exports = pages;
