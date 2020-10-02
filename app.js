var express = require("express");
var  path = require("path");

var app = express();

app.use(express.static(path.join(__dirname,'./statWeb')));		// through 'app.use()', middleware 'express.static()' is applied

app.get('/', function(res,req){
	res.sendFile(path.join(__dirname,'./statWeb/index.html'));
});

app.listen(3000, function(){
	console.log('Server listening on port: 3000');
});