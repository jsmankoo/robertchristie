'use strict';

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Styles = require('../../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  base: {
    zIndex: 10000,
    position: 'fixed',
    top: '51px',
    right: '0px',
    width: '100%',
    height: 'auto',
    '@media (min-width: 768px)': {
      top: '50px',
      width: '300px',
      height: '100%',
      backgroundColor: (0, _color2.default)(_Styles.colors.dark).clearer(0.25).rgbString()
    }
  },
  category: {
    backgroundColor: (0, _color2.default)(_Styles.colors.dark).clearer(0.25).rgbString(),
    '@media (min-width: 768px)': {
      backgroundColor: 'transparent'
    },
    a: {
      display: 'block',
      width: '100%',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'left',
      paddingLeft: '20px',
      position: 'relative'
    }
  },
  border: {
    width: '100%',
    height: '1px',
    marginLeft: '0px',
    backgroundColor: (0, _color2.default)(_Styles.colors.white).rgbString(),
    '@media (min-width: 768px)': {
      width: '150px',
      marginLeft: '40px'
    }
  },
  submenu: {
    a: {
      display: 'block',
      width: '100%',
      height: '30px',
      lineHeight: '30px',
      textAlign: 'left',
      paddingLeft: '40px',
      position: 'relative',
      '@media (min-width: 768px)': {
        height: '40px',
        lineHeight: '40px'
      }
    }
  }
};