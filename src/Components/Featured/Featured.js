import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import Carousel from './Carousel';

import Styles from './Styles';

const Featured = ({mls, properties}) => {
  return (
    <div id='featured' className='Featured' style={[Styles.base]}>
      <div style={[Styles.wrapper]}>
        <h2 style={[Styles.header]}>
          OCEANFRONT PROPERTIES
        </h2>
        <Carousel data={properties} />
        <h2 style={[Styles.header]}>
          <a href={mls} style={[Styles.mls]}>SEARCH OCEANFRONT PROPERTIES</a>
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = ({Featured}) => {
  return {
    mls: Featured.get('mlsLink'),
    properties: Featured.get('properties').toJS()
  };
}
const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  Radium(
    Featured
  )
);
