import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

player.on('timeupdate', onPlay);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.setCurrentTime();
