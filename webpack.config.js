const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: "applib",
    libraryTarget: 'umd'
  },
  plugins: [new CleanWebpackPlugin()],

  module: {
    rules: [
     {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom' : 'ReactDOM',
   }
  

};