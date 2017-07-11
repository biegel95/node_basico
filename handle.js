function handle(request, response) {
	response.writeHead(200, {
		'ontent-Type': 'text/html'
	});

	response.write('<body>');
	response.write('<h1>Teste</h1>');
	response.write('</body>');
	response.end();
}

module.exports = handle;