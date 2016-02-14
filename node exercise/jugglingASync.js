var http = require('http');

var urls = process.argv.filter(function (element, index) {
    return index > 1;
});

var result = [];


for (var i = 0; i < 3; i++) {
    httpGet(i);

}

function httpGet(index) {
    http.get(urls[index], function (response) {

        var resultString = "";

        response.on('data', function (data) {
            resultString += data.toString();
        });

        response.on('end', function (data) {
            result[index] = resultString;
            if (index == 2) {
                printResult();
            }
        });
    });
}

function printResult() {
    for (var i = 0; i < 3; i++) {
        console.log(result[i]);
    }
}