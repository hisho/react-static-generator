const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = () => {
  const MODE = process.env.NODE_ENV;
  const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
  const IS_PRODUCTION = process.env.NODE_ENV === 'production';

  return {
    mode: MODE,
    devtool: IS_DEVELOPMENT ? 'inline-source-map' : false,
    entry: {
      "dist/assets/js/main": "./src/js/main",
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.jsx', '.js'],
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname),
    },
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                experimentalWatchApi: true,
              }
            }
          ],
        }
      ]
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new webpack.ProgressPlugin(),
    ],
  }
};
