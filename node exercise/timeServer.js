var net = require('net');
var moment = require('moment');

var server = net.createServer(function (socket) {
    socket.end(getDate() + "\n");
});

server.listen(process.argv[2]);


function getDate() {
    return moment().format('YYYY-MM-DD HH:mm');
}