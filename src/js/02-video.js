const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import Throttle from 'lodash.throttle';

const handlerCurrentTime = function (data) {
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
};
const currentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', Throttle(handlerCurrentTime, 1000));

player
  .setCurrentTime(currentTime - 2)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
