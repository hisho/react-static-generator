const HtmlWebpackPlugin = require("html-webpack-plugin");
const Pages = require('./pages');

module.exports = () => {
  return {
    plugins: [
      ...Pages.map(({template, filename}) => new HtmlWebpackPlugin({
        template,
        filename,
        inject: false,
      })),
    ],
  }
}
