const vimeoPlayerRef = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(vimeoPlayerRef);
import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const handlerCurrentTime = function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
};
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.on('timeupdate', throttle(handlerCurrentTime, 1000));

player.setCurrentTime(currentTime - 2);
