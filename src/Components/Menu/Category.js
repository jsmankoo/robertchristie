import React, {Component} from 'react';
import {Motion, spring, presets} from 'react-motion';
import Radium from 'radium';
import Color from 'color';
import Submenu from './Submenu';

import {colors} from '../../Styles';
import Styles, {category} from './Styles';

const Category = ({name, open ,hover, onMouseOver, onMouseOut, link, border, submenu, index, style, toggleMenu, ...rest}) => {
  return (
    <div className='Category' style={[category, style]} {...rest}>
      <div style={[(!hover && border) && Styles.border]}/>
      <Motion style={{
        background: hover ? 0 : 1,
        color: hover ? spring(0, presets.noWobble) : spring(1, presets.noWobble),
        letterSpacing: hover ? spring(6, presets.noWobble) : spring(3, presets.noWobble)
      }}>
        {
          ({background, color, letterSpacing}) => (
            <a
              data-scroll
              onMouseOut={onMouseOut}
              onMouseOver={onMouseOver}
              className='H3'
              href={link}
              style={[category.a, {
                backgroundColor: Color(colors.white).clearer(background).rgbString(),
                color: Color(colors.blue).lighten(color).rgbString(),
                letterSpacing: `${letterSpacing}px`
              }]}
            >
              {name}
            </a>
          )
        }
      </Motion>
      <Submenu data={submenu} category={index} open={open} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Radium(
  Category
);
