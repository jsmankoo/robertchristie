import Color from 'color';
import {colors, align} from '../../Styles';

module.exports = {
  base: {
    display: 'block',
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    clipPath: `polygon(50% 7%, 100% 0, 100% 93%, 50% 100%, 0 93%, 0 0)`,
    overflow: 'hidden'
  },
  tint: {
    backgroundColor: Color(colors.white).clearer(0.10).rgbString(),
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 0px',
    textAlign: 'center'
  },
  header: {
    margin: '0 0 25px',
    '@media (min-width: 768px)':{
      margin: '0 0 25px',
    }
  },
  row: {
    width: '100%',
    maxWidth: '768px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 20px',
    '@media (min-width: 768px)':{
      flexDirection: 'row'
    }
  },
  img: {
    mobile: {
      width: '280px',
      maxWidth: '100%',
      height: 'auto',
      margin: 'auto',
      '@media (min-width: 768px)':{
        display: 'none'
      }
    },
    tablet: {
      display: 'none',
      width: '280px',
      height: 'auto',
      margin: '0 auto',
      '@media (min-width:768px)':{
        display: 'block',
        marginRight: '20px'
      }
    }
  },
  markdown: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    '@media (min-width: 768px)':{
      textAlign: 'left'
    }
  }
};
