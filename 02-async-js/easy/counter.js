function counter()
{
    let n=0;
    setInterval(()=>{
        console.clear();
        console.log(n++);
        
    } ,1000)
}
counter();