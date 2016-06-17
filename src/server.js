import express from 'express';
import morgan from 'morgan';
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
let app = express();

app.set(`port`, process.env.NODE_PORT || 3000);
app.set(`ip`, process.env.NODE_IP || `localhost`);

app.set(`views`, `./views`);
app.set(`view engine`, `pug`);

app.use(morgan(`dev`));


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

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.use(express.static(`./public`));

app.get(`/`, function(req, res){
  // , {app: renderToString(<App />)}
  res.render(`index`);
});

app.get(`/other`, function(req, res){
  res.render(`other`);
});

app.get(`/iHomefinder`, function(req, res){
  res.render(`iHomefinder`);
});

app.listen(app.get(`port`), app.get(`ip`), function(){
  console.log('Application ip ' + app.get(`ip`) + ':' + app.get(`port`));
  console.log('worker ' + process.pid + 'started...');
});
