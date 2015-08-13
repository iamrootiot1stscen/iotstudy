/**
 * New node file
 */
function route(handle, pathname, res) {
    console.log('about to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](res);
    } else {
        console.log('no request handler found for ' + pathname);
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.write('404 Not Founc');
        res.end();
    }
}

exports.route = route;