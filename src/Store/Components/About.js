import {fromJS} from 'immutable';

export default (state = fromJS({
  background: '/media/poster.jpg',
  name: 'Brand Name',
  pic: {
    tablet: '/media/poster.jpg',
    mobile: '/media/poster.jpg'
  },
  markdown: '#### Some Headingn\nSome Paragraph'
}), action) => {
  switch (action.type) {
    case 'ABOUT_INIT':
      return state
        .set('background', action.background)
        .set('name', action.name)
        .setIn(['pic', 'tablet'], action.tablet)
        .setIn(['pic', 'mobile'], action.mobile)
        .set('markdown', action.markdown);
    default:
      return state;
  }
};
