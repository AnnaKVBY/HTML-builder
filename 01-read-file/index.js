const fs = require('fs');
const path = require('path');


const myRead = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

myRead.on('data', function(chunk) {
    console.log(chunk);
})