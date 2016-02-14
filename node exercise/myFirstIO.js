var fs = require('fs');

var path = process.argv[2];


var buffer = fs.readFileSync(path, 'utf8');


var inputArray = buffer.split('\n');

var result = inputArray.length - 1;

console.log(result);