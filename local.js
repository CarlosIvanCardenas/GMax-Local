//const socket = require('socket.io-client')('http://webarm.azurewebsites.net/');
const socket = require('socket.io-client')('http://localhost:3000');
const five = require('johnny-five');

let led = null;
let servo = null;

five.Board().on('ready', function() {
  console.log('Arduino is ready.');
  led = new five.Led(13);
  servo = new five.Servo(10);
});

socket.on('connect', function (server) {
    socket.emit('ready', 'arduino');
    console.log('local conected');
});

socket.on('prender', function() {
    led.on();
    console.log('prender');
})

socket.on('apagar', function() {
    led.off();
    servo.stop();
    console.log('apagar');
})

socket.on('girar', function() {
    servo.sweep();
    console.log('girar');
})

socket.on('slide', function(value) {
    servo.to(value);
    console.log('girar a %d', value);
})