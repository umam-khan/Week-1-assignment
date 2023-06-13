const fs = require('fs');

function readFile() {
  fs.readFile('one.txt', 'utf8', ( err, data) => {
    console.log('File contents:', data);
  });
}
readFile();
