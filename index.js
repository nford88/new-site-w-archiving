

var express = require('express');
var server = express();
server.use('/', express.static('/src/archive'));
server.listen(8080);