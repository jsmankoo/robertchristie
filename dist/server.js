'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React from 'react';
// import {renderToString} from 'react-dom/server';
// import webpack from 'webpack';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import stylus from 'stylus';
// import axis from 'axis';
// import jeet from 'jeet';
// import rupture from 'rupture';
//
// import App from './Components/App/App';
// import webpackDevConfig from '../webpack.dev';
//
// const compiler = webpack(webpackDevConfig);

// Init express
var app = (0, _express2.default)();

app.set('port', process.env.NODE_PORT || 3000);
app.set('ip', process.env.NODE_IP || 'localhost');

app.set('views', './views');
app.set('view engine', 'pug');

app.use((0, _morgan2.default)('dev'));

// app.use(
//   webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: webpackDevConfig.output.publicPath
//   })
// );
// app.use(
//   webpackHotMiddleware(compiler, {
//     log: console.log,
//     path: '__webpack_hmr/',
//     heartbeat: 10*1000
//   })
// );
//
// app.use(stylus.middleware(
//   { src: __dirname + '/public'
//   , compile: (str, path) => stylus(str)
//       .set('filename', path)
//       .use(axis())
//       .use(jeet())
//       .use(rupture())
//   }
// ))

app.use(function (req, res, next) {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.use(_express2.default.static('./public'));

app.get('/', function (req, res) {
  // , {app: renderToString(<App />)}
  res.render('index');
});

app.get('/other', function (req, res) {
  res.render('other');
});

app.get('/iHomefinder', function (req, res) {
  res.render('iHomefinder');
});

app.listen(app.get('port'), app.get('ip'), function () {
  console.log('Application ip ' + app.get('ip') + ':' + app.get('port'));
  console.log('worker ' + process.pid + 'started...');
});