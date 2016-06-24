import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {Motion, spring, presets} from 'react-motion';
import Color from 'color';

import {submenu} from './Styles';
import {colors} from '../../Styles';

const Submenu = ({open, data, category, onHover, toggleMenu}) => {
  if(!data)
    return <div />;

  return (
    <Motion style={{
      height: open ? spring(40*data.length, presets.noWobble) : spring(0, presets.noWobble)
    }}>
      {
        ({height}) => (
          <div style={[submenu.base, {
            height: `${height}px`,
            overflow: 'hidden',
            '@media (min-width: 768px)':{
              height: 'auto',
              overflow: 'none'
            }
          }]}>
            { data.map( ({name, link, hover}, index) => (
                <Motion key={name} style={{
                  background: hover ? 0 : 1,
                  color: hover ? spring(0, presets.noWobble) : spring(1, presets.noWobble),
                  letterSpacing: hover ? spring(4, presets.noWobble) : spring(2, presets.noWobble)
                }}>
                  {
                    ({background, color, letterSpacing}) => (
                      <a
                        data-scroll
                        className='H4'
                        href={link}
                        onMouseOver={onHover(category, index)}
                        onMouseOut={onHover(category, index)}
                        onClick={toggleMenu}
                        style={[submenu.a, {
                          color: Color(colors.blue).lighten(color).rgbString(),
                          backgroundColor: Color(colors.white).clearer(background).rgbString(),
                          letterSpacing: `${letterSpacing}px`
                        }]}
                      >
                        {name}
                      </a>
                    )
                  }
                </Motion>
              ))
            }
          </div>
        )
      }
    </Motion>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onHover(category, submenu){
    return () => {
      dispatch({
        type: 'MENU_SUBMENU_HOVER_TOGGLE',
        category: category,
        submenu: submenu
      });
    };
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  Radium(
    Submenu
  )
);
