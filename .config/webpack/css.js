// 安全にパスを解決する
const path = require('path');
// CSSを取り出す
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
// stylelintを使う
const StyleLintPlugin = require('stylelint-webpack-plugin');
// 余分なJSを出さない
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = () => {
  const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
  const IS_PRODUCTION = process.env.NODE_ENV === 'production';

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: ExtractCssChunks.loader
            },
            {
              //cssの処理
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true,
              },
            },
            {
              //postcssの処理
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              }
            },
          ],
        },
      ],
    },
    plugins: [
      //cssファイルにする際出てくるjsファイルを削除する
      new FixStyleOnlyEntriesPlugin(),
      //cssファイルに切り出す時の設定
      new ExtractCssChunks({
        //元のファイル名.css
        filename: '[name].css',
        //元のチャンクid.css
        chunkFilename: '[id].css',
        orderWarning: true,
      }),
      //stylelintを使う
      new StyleLintPlugin({
        configFile: path.resolve(process.cwd(), '.config/.stylelintrc.js'),
        fix: true,
      }),
    ]
  }
}
