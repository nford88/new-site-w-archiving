

var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/src/archive'));
server.listen(8080);