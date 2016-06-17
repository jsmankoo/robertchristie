'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    open: false
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'MENU_TOGGLE':
      return state.update('open', function (open) {
        return !open;
      });
    default:
      return state;
  }
};