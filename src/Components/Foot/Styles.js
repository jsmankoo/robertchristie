import Color from 'color';
import {color} from '../../Styles';

module.exports = {
  base: {
    width: '100%',
    height: 'auto',
    minHeight: '50px',
    padding: '0px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'space-between',
    backgroundColor: '#f3f3f3',
    '@media (min-width: 768px)':{
      flexDirection: 'row'
    }
  },
  copyright: {
    textAlign: 'center',
    padding: '20px 0px',
    width: '100%',
    '@media (min-width: 768px)':{
      width: '33.33%',
      textAlign: 'left',
      padding: '0px',
    }
  },
  developer: {
    textAlign: 'center',
    padding: '20px 0px',
    width: '100%',
    '@media (min-width: 768px)':{
      width: '33.33%',
      textAlign: 'right',
      padding: '0px',
    }
  },
  socialMedia: {
    padding: '20px 0px',
    textAlign: 'center',
    flexDirection: 'row',
    width: '100%',
    '@media (min-width: 768px)':{
      width: '33.33%',
      padding: '0px',
    },
    a: {
      padding: '15px'
    }
  }
};
