var fs = require('fs'); // file system

/*fs.writeFile('data.txt', 'Olá Mundo', function(err){
	if (err) {
		throw err;
	}
});*/ // criar o arquivo

/*fs.readFile('data.txt', function(err, data) {
	if (err) {
		throw err;
	}

	console.log(data.toString('utf8'));
});*/ // ler o arquivo

/*fs.readdir('.', function(err, files) {
	if(err) {
		throw err;
	}

	for(var file in files) {
		console.log(files[file]);
	}
});*/ // ler determinada pasta (nome dos arquivos)

fs.readdirSync('.')
  .filter(function(file) {
  	return(file.endsWith('.js'))
  })
  .forEach(function(file) {
  	console.log(file)
  }) // filtrar apenas por determinadas extensoes