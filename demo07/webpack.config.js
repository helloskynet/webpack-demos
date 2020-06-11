var TerserPlugin = require('terser-webpack-plugin');

/*  webpack压缩代码的时候不再使用uglifyjs-webpack-plugin转而使用terser-webpack-plugin，因为uglifyjs引用的uglifyes不再更新而uglifyjs又不支持es6+，所以使用terser，它是uglifyes的一个分支。它兼容uglifyjs@3和uglifyes的API和CLI */

module.exports = {
  entry: './main.js',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    filename: 'bundle.js',
  },
};
