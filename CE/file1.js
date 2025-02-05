const fs = require('fs');    //importing fs module

const data = fs.readFileSync('./data.txt' )
console.log(data.toString());
