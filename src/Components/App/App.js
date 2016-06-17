import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import {Motion, spring, presets} from 'react-motion';
import {connect} from 'react-redux';

const mapStateToProps = ({Menu}) => {
  return {
    menuOpen: Menu.get('open')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle(){
      dispatch({type: 'MENU_TOGGLE'});
    }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      AppMounted: false
    }
  }
  componentDidMount(){
    this.timeout = setTimeout(()=>{
      this.setState({
        AppMounted: true
      });
    }, 500);
  }
  componentWillUnmount(){
    clearTimeout(this.timeout);
  }
  render(){
    const {menuOpen, toggle} = this.props;
    return (
      <StyleRoot>
        <h1>App!!!!</h1>
        <div className='Menu'>
          {menuOpen ? 'Open' : 'Closed'}
        </div>
        <button onClick={toggle}>Toggle</button>
      </StyleRoot>
    );
  }
};

export default App;
