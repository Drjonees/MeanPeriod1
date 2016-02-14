var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, 'utf8', function (err, data) {
    if (!err) {
        var buffer = data.split('\n').length - 1;
        console.log(buffer);
    }
});