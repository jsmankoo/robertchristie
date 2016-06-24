import {fromJS} from 'immutable';
export default (state = fromJS({
  mlsLink: '',
  properties: []
}), action) => {
  switch (action.type) {
    case 'FEATURED_LINK_INIT':
      return state.set('mlsLink', action.link);
    case 'FEATURED_ADD_PROPERTY':
      return state.update('properties', (properties) => (
        properties.push(fromJS({
          address: action.address,
          link: action.link,
          photo: action.photo,
          price: action.price
        }))
      ));
    default:
      return state;
  }
};
