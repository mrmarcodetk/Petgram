// const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry: './src/index.js',
  mode: 'development',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  }
}
