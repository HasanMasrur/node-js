const emitter =  require('events');


class School extends emitter.EventEmitter{
    startClasa(){
console.log("start");
setTimeout(()=>{
this.emit('start',{
    bang:'Bangla Class',
     english:'English Class'})
})
    };
}

module.exports = School ;