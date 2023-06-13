const fs = require("fs")

function writeFile(content){
    fs.writeFile("one.txt",content,"utf-8",(err)=>{
        console.log("written successfully");
    })
}
writeFile("jessssse");

function readFile() {
    fs.readFile('one.txt', 'utf8', ( err, data) => {
      console.log('File contents:', data);
    });
  }
readFile();