const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('bellRing', () => {
    console.log("we need run ");
});

emitter.emit('bellRing');