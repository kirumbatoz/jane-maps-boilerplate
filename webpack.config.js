const webpack = require('webpack');
module.exports = {
  entry: {
    app: ['./src/App.jsx'],
    vendor: ['react', 'react-dom','babel-polyfill'],
  },
  output: {
    path: __dirname + './static',
    filename: 'app.bundle.js'
  },
  devServer:{
    port:8000,
    contentBase:'static',
    proxy:{
      '/api/*':{
        target:'http://localhost:3000'
      }
    }
  },
  devtool:'source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'vendor.bundle.js'})
  ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, ]
  }
};
