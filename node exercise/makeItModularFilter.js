var fs = require('fs');


module.exports = function (path, fileExtention, callback) {
    fs.readdir(path, function (err, files) {
        if (!err) {
            files = files.filter(function (file) {
                return file.split('.')[1] == fileExtention;
            });
            callback(null, files);
        } else {
            callback(err);
        }
    });
}