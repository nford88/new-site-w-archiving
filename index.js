

var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/public/archive'));
server.listen(8080);