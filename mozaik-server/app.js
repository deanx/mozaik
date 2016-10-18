var Pusher = require( 'pusher' );

var pusher = new Pusher({ appId: '254739', key: '0e686a9512c42bd4fe61', secret: '0a4f32128911b7974dd9'});
pusher.trigger( 'transport', 'driver_ride', {
   "companyID":123,
   "driverID":456,
   "timestamp":"2015-10-10'T'07:23:53",
   "latitude":52.234234,
   "longitude":13.23324,
   "accuracy":12.0,
   "speed":123.45
}, function(err, request, response) {
  if(err) console.log(err);
});
