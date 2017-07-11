var http = require('http');
var handle = require('./handle.js');
var name = require('./name.js');

var events = require('events');
var emiter = new events.EventEmitter();

require('console-log-hello-world');

/*emiter.on('say12', say);

function say() {
	console.log('eu sou say...');
}

emiter.emit('say12');*/

var server = http.createServer(handle);

//name.nome();

server.listen(300, function() {
	console.log('Servidor criado com sucesso - Porta 300!');
});