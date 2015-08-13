/**
 * New node file
 */
var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log('request received. ' + pathname);
		
		route(handle, pathname, res);	// injection function call
	}
	
	http.createServer(onRequest).listen(8888);
	
	console.log('Server has started');
}

exports.start = start;