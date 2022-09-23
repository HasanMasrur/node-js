const emitter = require('events');

const emits = new emitter.EventEmitter();

emits.on('start',({per, perss})=>{
  console.log(`i hear a scream ${per} ${perss}`);
})
emits.emit('start',{
  per:'i am ',
  perss:'hasan masrur babu'});