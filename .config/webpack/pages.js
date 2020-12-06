const glob = require('glob');

const pages = glob.sync(`**/*.tsx`, {
  ignore: `**/_*.tsx`,
  cwd: `./src/pages`
}).map((n) => {
  const ext = n.replace(/tsx$/,'html')
  return {
    template: "src/pages/" + n,
    filename: 'dist/' + ext,
    inject: false,
  }
});

module.exports = pages;
