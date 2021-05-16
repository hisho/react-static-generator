// 安全にパスを解決する
const path = require('path');
//TSの型チェックを別スレッドで実行するのに必要
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              //typescriptを変換する
              loader: 'ts-loader',
              options: {
                //変換のみする
                transpileOnly: true,
                experimentalWatchApi: true,
                configFile: path.resolve(process.cwd(), 'tsconfig.json')
              }
            }
          ],
        }
      ],
    },
    plugins: [
      //typeScriptの型チェックを別スレッドでする
      new ForkTsCheckerWebpackPlugin(),
    ]
  }
}
