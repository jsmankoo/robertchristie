import React, {Component} from 'react';
import Radium from 'radium';
import {Motion, spring, presets} from 'react-motion';

import Styles from './Styles';

@Radium
class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      transform: 0
    };
  }
  componentDidMount = () => {
    this.interval = setInterval( ()=>{
      const {transform} = this.state;
      const index = (this.props.data.length)*100;
      if(index !== 0)
        this.setState({...this.state,
          transform: (transform + 0.1) % (index)
        });
  }, 1000/60 );
  }

  componentWillUnount = () => {
    clearInterval(this.interval);
  }
  render(){
    const {index, transform} = this.state;
    const {data} = this.props;
    const subset = data.slice(0,2);
    return (
      <div className='Carousel' style={[Styles.carousel]}>
        {
          data.map( ({photo: img}, index)=>{
            return (
              <img key={img} src={img} style={{
                transform: `translate(${-1*transform}%, 0%)`,
                margin: '0px 0px'
              }}/>
            );
          } )
        }
        {
          subset.map( ({photo: img}, index)=>{
            return (
              <img key={img} src={img} style={{
                transform: `translate(${-1*transform}%, 0%)`
              }}/>
            );
          } )
        }
      </div>
    );
  }
}

export default Carousel;
