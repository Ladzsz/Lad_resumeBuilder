const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, 
        type: 'asset/resource', 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/input.html', 
      filename: 'input.html', 
  }),

    new HtmlWebpackPlugin({
      template: './src/style.html', 
      filename: 'style.html', 
  }),
    new MiniCssExtractPlugin(),
  ],

  devServer: {
    contentBase: './dist', // or the folder where your HTML is located
    hot: true, // Enable hot module replacement (HMR)
    open: true, // Open the browser after starting the server
    port: 8080, // You can change the port if needed
  },
  mode: 'development',
};
