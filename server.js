var http = require('http');

http.createServer(function (req, res) {
	var _url;

	req.method = req.method.toUpperCase();
	console.log(req.method + ' ' + req.url);

	if(req.method !== 'GET') {
		res.writeHead(501, {
			'Content-Type': 'text/plain'
		});
		return res.end(req.method + ' is not implemented by this server.');
	}

	if(_url = /^\/employees$/i.exec(req.url)) {
		res.writeHead(200);
		return res.end('employee list');
	} else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
		res.writeHead(200);
		return res.end('a single employee');
	} else {
		res.writeHead(200);
		res.end('static file maybe');
	}
	//res.end('The current time is ' + Date.now());
}).listen(1337, '127.0.0.1');

//console.log('Server running at http://127.0.0.1:1337');
