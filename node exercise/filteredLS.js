var fs = require('fs');


var path = process.argv[2];
var fileExtention = process.argv[3];

fs.readdir(path, function (err, files) {
    if (!err) {
        files.forEach(function (file) {
            if (file.split('.')[1] == fileExtention) {
                console.log(file);
            }
        });
    };
});