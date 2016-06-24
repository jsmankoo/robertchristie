import {fromJS} from 'immutable';

export default (state = fromJS({
  videos: ['/media/video.mp4', '/media/video.webm'],
  poster: '/media/poster.jpg',
  slides: [
    '/img/1.jpg',
    '/img/2.jpg'
  ],
  headline: 'Headline Here',
  subheadline: 'Optional Subheadline here'
}), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
