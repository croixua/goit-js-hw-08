import throttle from 'lodash.throttle';

const vimeoPlayerRef = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(vimeoPlayerRef);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const handlerCurrentTime = function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(handlerCurrentTime, 1000));

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (currentTime !== null || currentTime >= 2) {
  player.setCurrentTime(currentTime - 2);
}
