'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Comment out during production
// var webpack = require('webpack');
// var webpackConfig = require('./webpack.dev');
// var compiler = webpack(webpackConfig);
var stylus = require('stylus');
var axis = require('axis');
var jeet = require('jeet');
var rupture = require('rupture');

// Init express
var app = (0, _express2.default)();

app.set('port', process.env.NODE_PORT || 3000);
app.set('ip', process.env.NODE_IP || 'localhost');

app.set('views', './views');
app.set('view engine', 'pug');

app.use((0, _morgan2.default)('dev'));

// Comment out during production
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true, publicPath: webpackConfig.output.publicPath,
// }));
// app.use(require('webpack-hot-middleware')(compiler, {
//   log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
// }));
app.use(stylus.middleware({ src: __dirname + '/public',
  compile: function compile(str, path) {
    return stylus(str).set('filename', path).use(axis()).use(jeet()).use(rupture());
  }
}));

app.use(function (req, res, next) {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.use(_express2.default.static('./public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/iHomefinder', function (req, res) {
  res.render('iHomefinder');
});

app.listen(app.get('port'), app.get('ip'), function () {
  console.log('Application ip ' + app.get('ip') + ':' + app.get('port'));
  console.log('worker ' + process.pid + 'started...');
});