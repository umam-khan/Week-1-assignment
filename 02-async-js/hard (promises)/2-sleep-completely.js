/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (milliseconds) {
let currentTime= new Date().getTime();
while(new Date().getTime()< currentTime + milliseconds){

};
}

sleep(5000);

console.log("moto");