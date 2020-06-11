var HtmlwebpackPlugin = require('html-webpack-plugin');

// open-browser-webpack-plugin 这个插件太老了，也没人更新，所有者好像已经放弃它了
// 它的功能也只是打开浏览器而已
//  webpack-dev-server --open 就挺好用

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: 'index.html',
    }),
  ],
};
