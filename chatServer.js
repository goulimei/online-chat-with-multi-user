var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//access all files under'./*****' directory
app.use(express.static('./'));

io.on('connection', function(socket){
	socket.on('join',function(name){
		socket.nickname = name;
		socket.broadcast.emit('announcement', name +' joined the chat.');
	});

	socket.on('text',function(msg){
		socket.broadcast.emit('text',socket.nickname,msg);
	});
});

server.listen(3000);