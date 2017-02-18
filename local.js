//const socket = require('socket.io-client')('http://webarm.azurewebsites.net/');
const socket = require('socket.io-client')('http://localhost:3000/');
const five = require('johnny-five');

let led = null;

five.Board().on('ready', function() {
  console.log('Arduino is ready.');
  led = new five.Led(13);
});

socket.on('connect', function (server) {
    socket.emit('ready', 'arduino');
    console.log('local conected');
});

socket.on('prender', function() {
    led.on();
})

socket.on('apagar', function() {
    led.off();
})