import Color from 'color';
import {colors} from '../../Styles';

module.exports = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '768px',
    height: 'auto',
    minHeight: '100vh',
    margin: 'auto',
    padding: '50px 0px',
    textAlign: 'center',
    '@media (min-width: 768px)':{
      padding: '100px 0px',
    }
  },
  header: {
    margin: '0 0 25px',
    '@media (min-width: 768px)':{
      margin: '0 0 0px',
    }
  },
  markdown: {
    width: '100%',
    padding: '25px 0px',
    height: 'auto',
  },
  icons: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon: {
    display: 'block',
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    padding: '15px 0px',
    color: Color(colors.grey).rgbString(),
    ':hover':{
      color: Color(colors.red).rgbString(),
    },
    '@media (min-width: 768px)':{
      width: '33%'
    },
    mobile: {
      fontSize: '25px',
    },
    email: {
      fontSize: '25px',
    },
    address: {
      fontSize: '25px',
    }
  },
};
