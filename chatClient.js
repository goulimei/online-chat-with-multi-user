window.onload = function(){
	var socket = io.connect();
	socket.on('connect',function(){
		socket.emit('join',prompt('Write your nickname, please?'));
		//document.getElementById('chat').style.dispaly = 'block';	
		
		socket.on('announcement',function(msg){
			var li = document.createElement('li');
			li.className = 'asnnouncement';
			li.innerHTML = msg;
			document.getElementById('messages').appendChild(li);
		});	
	});


	function addMessage(from,text){
		var li = document.createElement('li');
		li.className = 'message';
		li.innerHTML = '<b>' + from + '</b>: ' + text;
		document.getElementById('messages').appendChild(li);
	}

	var input = document.getElementById('input');
	document.getElementById('form').onsubmit = function(){
		addMessage('me',input.value);
		socket.emit('text',input.value);

		input.value = '';
		input.focus();

		return false;
	}
	socket.on('text',addMessage);
	
}