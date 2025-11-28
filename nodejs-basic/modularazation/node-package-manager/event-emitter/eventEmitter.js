const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

const eventBirthday = ({name}) => {
    console.log(`Happy birthday ${name}!`);
}

myEventEmitter.on('birthday', eventBirthday);
myEventEmitter.emit('birthday', {name: 'Aditya Beckham'});

