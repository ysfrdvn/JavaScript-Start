const events = require('events');
const eventEmitter = new events.EventEmitter();
//tanımlarken eventEmitter.once yaparsak sadece 1 kere tetiklemeye izin verir

eventEmitter.on("say hello" , () => { // olayı tanımla
    console.log("Hello Node")
});

eventEmitter.emit("say hello");

/*
setInterval(() => { // 2 saniyede bir olayı tetikle
    eventEmitter.emit("say hello") // olayı tetikle
}, 2000);
*/

eventEmitter.on("login Successful" , (username) => { // olayı tanımla
    console.log("welcome to web site " + username)
}); 

const USERNAME = "ysfrdvn"
eventEmitter.emit("login Successful" , USERNAME);