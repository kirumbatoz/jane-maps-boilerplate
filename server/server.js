import express from 'express';
import bodyParser from 'body-parser';
import 'babel-polyfill';
import SourceMapSupport from 'source-map-support';
SourceMapSupport.install()

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevmiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const config = require('../webpack.config');
  config.entry.app.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const bundler = webpack(config);
  app.use(webpackDevmiddleware(bundler, {
    noInfo: true
  }));
  app.use(webpackHotMiddleware(bundler, {
    log: console.log
  }));
}

app.listen(3000, function () {
  console.log('App started on port 3000');
});
