const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev')
  },
  devServer: {
    port: 3000,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dev')
    }
  }
}
