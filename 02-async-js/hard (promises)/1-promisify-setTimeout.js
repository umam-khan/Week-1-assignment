/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
const promise= new Promise((resolve,reject)=>{
    
setTimeout(()=> {
    resolve(n)
}, n*1000);

})

return promise;
}
n=10;
const val = wait(n);
val.then((result)=>{
    console.log(`${result} seconds have passed`)
})
console.log("helo")