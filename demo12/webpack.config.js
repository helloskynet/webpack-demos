module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx',
  },
  output: {
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      name: 'commons',
      // (the commons chunk name)
      filename: 'commons.js',
      // (the filename of the commons chunk)
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
