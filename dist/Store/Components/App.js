'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    loaded: false,
    delay: 100,
    initJumbotron: false
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'APP_INIT':
      return state.set('loaded', true);
    case 'APP_JUMBOTRON_INIT':
      return state.set('initJumbotron', true);
    default:
      return state;
  }
};