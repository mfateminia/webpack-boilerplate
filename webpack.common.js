const HtmlWebpackPlugin = require('html-webpack-plugin'); // to produce index.html automatically

module.exports = {
  entry: './src/index.js', // from where to start bundling (can have more than 1 entry)
  plugins: [
    new HtmlWebpackPlugin({
    template:'./src/template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/ ,
        use:[
          'style-loader', // 3-injects <style> into DOM
          'css-loader', // 2-turns css into js
          'sass-loader' // 1-turns sass to csss
        ]
      }, 
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: {
          loader: 'file-loader',
          options: { 
            name: '[name].[hash].[ext]',
            outputPath: 'images'
          }
        }
      }
    ]
  }
}