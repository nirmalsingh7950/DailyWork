var http = require('http');

var handleReq = function(req, res){
        console.log('Received request for URL: ' + req.url);
	res.writeHead(200);
	res.end('Hello World!');
};

var www = http.createServer(handleReq);
www.listen(8080);
