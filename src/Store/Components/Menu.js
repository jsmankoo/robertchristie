import {fromJS} from 'immutable';

export default (state = fromJS({
  open: false
}), action) => {
  switch (action.type) {
    case 'MENU_TOGGLE':
      return state.update('open', open => !open);
    default:
      return state;
  }
};
