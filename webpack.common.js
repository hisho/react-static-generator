const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  const MODE = process.env.NODE_ENV;
  const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
  const IS_PRODUCTION = process.env.NODE_ENV === 'production';

  return {
    mode: MODE,
    devtool: IS_DEVELOPMENT ? 'inline-source-map' : false,
    entry: {
      "dist/assets/styles/style": "./src/styles/style",
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.jsx', '.js', '.css'],
      alias: {
        '@src': path.resolve('./src'),
      },
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname),
    },
    target: ['web', 'es5'],
    plugins: [
      new webpack.ProgressPlugin(),
    ],
  }
};
