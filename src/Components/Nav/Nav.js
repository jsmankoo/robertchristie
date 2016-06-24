import React, {Component} from 'react';
import Radium from 'radium';
import {Motion, spring, presets} from 'react-motion';
import {connect} from 'react-redux';
import Color from 'color';
import MenuIcon from './Menu.svg';
import CloseIcon from './Close.svg';

import Styles, {base} from './Styles';
import {colors} from '../../Styles';

const Nav = ({brand, hover, onHover, open, toggle, iconHover, iconOnHover}) => {
  return (
    <div className='Nav' style={[base]}>
      <Motion style={{
        letterSpacing: hover ? spring(4, presets.gentle) : spring(3, presets.gentle),
        color: hover ? spring(0, presets.noWobble) : spring(1, presets.noWobble)
      }}>
        {
          ({letterSpacing, color}) => (
            <a
              onMouseOver={onHover}
              onMouseOut={onHover}
              className='H3'
              href='/'
              style={[Styles.brand, {
                letterSpacing: `${letterSpacing}px`,
                color: Color(colors.blue).lighten(color).rgbString()
              }]}
            >
              {brand}
            </a>
          )
        }
      </Motion>
      <Motion style={{
        menu: !open ? spring(20, presets.gentle) : spring(-40, presets.gentle),
        close: open ? spring(20, presets.gentle) : spring(-40, presets.gentle),
        hover: iconHover ? spring(0, presets.noWobble) : spring(1, presets.noWobble)
      }}>
        {
          ({menu, close, hover}) => (
            <div>
              <MenuIcon
                onMouseOver={iconOnHover}
                onMouseOut={iconOnHover}
                onClick={toggle}
                style={[Styles.icon, {
                  right: `${menu}px`
                }]}
                color={Color(colors.blue).lighten(hover).rgbString()}
              />
              <CloseIcon
                onMouseOver={iconOnHover}
                onMouseOut={iconOnHover}
                onClick={toggle}
                style={[Styles.icon, {
                  right: `${close}px`
                }]}
                color={Color(colors.blue).lighten(hover).rgbString()}
              />
            </div>
          )
        }
      </Motion>
    </div>
  );
};

const mapStateToProps = ({Nav, Menu}) => {
  return {
    brand: Nav.get('brand'),
    hover: Nav.get('hover'),
    open: Menu.get('open'),
    iconHover: Nav.get('iconHover')
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onHover(){
      dispatch({type: 'NAV_BRAND_HOVER'});
    },
    toggle(){
      dispatch({type: 'MENU_TOGGLE'});
    },
    iconOnHover(){
      dispatch({type: 'NAV_BRAND_ICON_HOVER'});
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  Radium(
    Nav
  )
);
