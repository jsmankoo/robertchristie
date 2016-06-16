import express from 'express';
import morgan from 'morgan';
import React from 'react';
import {renderToString} from 'react-dom/server';

import App from './Components/App/App';

// Comment out during production
// var webpack = require('webpack');
// var webpackConfig = require('./webpack.dev');
// var compiler = webpack(webpackConfig);
var stylus = require('stylus');
var axis = require('axis');
var jeet = require('jeet');
var rupture = require('rupture');


// Init express
let app = express();

app.set(`port`, process.env.NODE_PORT || 3000);
app.set(`ip`, process.env.NODE_IP || `localhost`);

app.set(`views`, `./views`);
app.set(`view engine`, `pug`);

app.use(morgan(`dev`));


// Comment out during production
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true, publicPath: webpackConfig.output.publicPath,
// }));
// app.use(require('webpack-hot-middleware')(compiler, {
//   log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
// }));
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: (str, path) => stylus(str)
      .set('filename', path)
      .use(axis())
      .use(jeet())
      .use(rupture())
  }
))

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.use(express.static(`./public`));

app.get(`/`, function(req, res){
  console.log(renderToString(<App />));
  res.render(`index`, {app: renderToString(<App />)});
});

app.get(`/iHomefinder`, function(req, res){
  res.render(`iHomefinder`);
});

app.listen(app.get(`port`), app.get(`ip`), function(){
  console.log('Application ip ' + app.get(`ip`) + ':' + app.get(`port`));
  console.log('worker ' + process.pid + 'started...');
});
