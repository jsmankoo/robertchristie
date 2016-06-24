'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    copyright: 'Copyright',
    information: 'Information',
    facebook: '//facebook.com',
    twitter: '//twitter.com',
    instagram: '//instagram'
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'FOOT_INIT':
      return state.set('copyright', action.copyright).set('information', action.information).set('facebook', action.facebook).set('twitter', action.twitter).set('instagram', action.instagram);
    default:
      return state;
  }
};