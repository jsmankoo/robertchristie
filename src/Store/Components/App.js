import {fromJS} from 'immutable';
export default (state = fromJS({
  loaded: false,
  delay: 100,
  initJumbotron: false
}), action) => {
  switch (action.type) {
    case 'APP_INIT':
      return state.set('loaded', true);
    case 'APP_JUMBOTRON_INIT':
      return state.set('initJumbotron', true);
    default:
      return state;
  }
};
