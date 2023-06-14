/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

let startTime = new Date();
function waitOneSecond() {
    const promise= new Promise((resolve,reject)=>{
    
        setTimeout(()=> {
            resolve(1)
        }, 1*1000);
        
        })
        
        return promise;
}

function waitTwoSecond() {
    const promise= new Promise((resolve,reject)=>{
    
        setTimeout(()=> {
            resolve(2)
        }, 2000);
        
        })
        
        return promise;
}

function waitThreeSecond() {
    const promise= new Promise((resolve,reject)=>{
    
        setTimeout(()=> {
            resolve(3)
        }, 3000);
        
        })
        
        return promise;
}


let one = waitOneSecond();
one.then(()=>{
    console.log("1s")
})
let two = waitTwoSecond();
two.then(()=>{
    console.log("2s")
})
let three = waitThreeSecond();
three.then(()=>{
    console.log("3s")
})
// .then(()=>{
//     waitAll();
// })
function waitAll(){
    Promise.all([one,two,three]).then((values)=>{
        console.log(values)
    }).then(()=>{
        let endtime = new Date();
        console.log(endtime-startTime);
    })
}
waitAll();



