var filterModule = require('./makeItModularFilter');

var path = process.argv[2];
var fileExtention = process.argv[3];

filterModule(path, fileExtention, function (err, list) {
    if (!err) {
        list.forEach(function (file) {
            console.log(file);
        });
    } else {
        console.log(err);
    }
});