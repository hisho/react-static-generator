//安全にパスを解決する
const path = require('path');
//複数のwebpackをmergeするプラグイン
const WebpackCommon = require('./webpack.common');
//javascriptの設定
const WebpackJavaScript = require(path.resolve(__dirname, '.config/webpack/typescript'));
//reactをSSGする設定
const WebpackReactSSG = require(path.resolve(__dirname, '.config/webpack/react-static'));
//cssの設定
const WebpackCSS = require(path.resolve(__dirname, '.config/webpack/css'));
//複数のwebpackをmergeするプラグイン
const {merge} = require('webpack-merge');

module.exports = () => {
  return merge(
    WebpackCommon(),
    WebpackJavaScript(),
    WebpackCSS(),
    WebpackReactSSG()
  );
}
