'use strict';

var _mls;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Styles = require('../../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  base: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 0px'
  },
  wrapper: {
    display: 'block',
    margin: 'auto',
    width: '100%',
    maxWidth: '1024px',
    padding: '0px 10px'
  },
  header: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '25px auto',
    '@media (min-width: 768px)': {
      margin: '25px auto'
    }
  },
  mls: (_mls = {
    margin: '20px auto',
    width: '200px',
    border: '1px solid ' + (0, _color2.default)(_Styles.colors.forest).rgbString(),
    fontSize: '13px',
    padding: '15px',
    lineHeight: '20px',
    color: (0, _color2.default)(_Styles.colors.forest).rgbString(),
    display: 'block'
  }, _defineProperty(_mls, 'width', '375px'), _defineProperty(_mls, 'maxWidth', '100%'), _mls),
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: (0, _color2.default)('#CCCCCC').rgbString()
  }
};