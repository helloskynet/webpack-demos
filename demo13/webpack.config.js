
module.exports = {
  entry: {
    app: './main.js',
    vendor: ['jquery'],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      // (the commons chunk name)
      filename: 'vendor.js',
      // (the filename of the commons chunk)
      chunks: 'all',
    },
  },
  output: {
    filename: 'bundle.js',
  },
};
