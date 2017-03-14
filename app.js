var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.use(function(req,res){
	res.sendFile(path.join(__dirname, './static', 'index.html'))
});

app.listen(3000,function(){
	console.log("sever running at port:3000")
});