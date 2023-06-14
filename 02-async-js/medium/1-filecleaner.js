const fs=require('fs');
const path = require('path');
function cleaner(){
    const filePath = path.join(__dirname, '..', 'easy', "one.txt");
    fs.readFile(filePath,"utf-8",(err,data)=>{
        if(err){
            console.log("err :",err);
            return;
        }
        const cleanedContent=data.replace(/\s+/g, ' ').trim();
        console.log(cleanedContent);

        fs.writeFile(filePath,cleanedContent,"utf-8",(err=>{
            if(err){
                console.log("failed")
            }
            else{
                console.log("successfully cleaned!")
            }
        }))
    })
}

cleaner();