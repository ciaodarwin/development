var http = require('http');
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Hello');
}).listen(3000, '127.0.0.1');
console.log('Server is running');