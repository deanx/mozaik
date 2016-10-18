import Mozaik  from 'mozaik';
import config  from '../config';
import github  from 'mozaik-ext-github/client';
import travis  from 'mozaik-ext-travis/client';
import Pusher  from 'pusher-js/node';
const mozaik = new Mozaik(config);

mozaik.bus.registerApi('github',  github);
mozaik.bus.registerApi('travis',  travis);
mozaik.bus.registerApi('drivers', mozaik => {
  return {
    list(send) {
      let pusher = new Pusher('0e686a9512c42bd4fe61', {
        encrypted: true
      });
      let channel = pusher.subscribe('transport');
      channel.bind('driver_ride', function(data) {
        console.log(data);
        send(data);
      });
    }
  };
}, 'push');

mozaik.startServer();
