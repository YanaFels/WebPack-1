const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              MiniCSSExtractPlugin.loader, 
              'css-loader'
            ]
          },
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './main.html'
        }),
        new MiniCSSExtractPlugin({
          filename: '[name].css'
        })
      ],
      devServer: {
        open: ['main.html'],
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8000,
      },
}