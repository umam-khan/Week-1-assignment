/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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


function calculateTime() {
    let one=waitOneSecond();
    one
    .then(()=>{
        console.log("1s")
        let two = waitTwoSecond();
        return two;
    })
    .then(()=>{
        console.log("2s");    
        let three= waitThreeSecond();
        return three;
    })
    .then(()=>{
        console.log("3s")
        let endtime = new Date();
        console.log(endtime-startTime);
    })
}

calculateTime();