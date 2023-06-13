let n=0;
let maxCount = 10;
function counter()
{
    if (n < maxCount){}
    setTimeout(()=>{
        console.clear();
        console.log(n);
        counter();
    } ,1000)
    
    n++;
}
counter();