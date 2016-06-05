var http = require('http');
var employeeService = require('./lib/employees');

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
		employeeService.getEmployees(function(error, data) {
			if(error) {
				// 500 error
			}
		});
		// status 200, send data
	} else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
		employeeService.getEmployee(_url[1], function(error, data) {
			if(error) {
				// 500 error
			}

			if(!data) {
				// 404 error
			}
		});
		// status 200, send data
	} else {
		// if file exists, send static file.
		// else status 404
	}
}).listen(1337, '127.0.0.1');