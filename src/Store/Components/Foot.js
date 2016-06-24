import {fromJS} from 'immutable';
export default (state = fromJS({
  copyright: 'Copyright',
  information: 'Information',
  facebook: '//facebook.com',
  twitter: '//twitter.com',
  instagram: '//instagram'
}), action) => {
  switch (action.type) {
    case 'FOOT_INIT':
      return state
        .set('copyright', action.copyright)
        .set('information', action.information)
        .set('facebook', action.facebook)
        .set('twitter', action.twitter)
        .set('instagram', action.instagram);
    default:
      return state;
  }
};
