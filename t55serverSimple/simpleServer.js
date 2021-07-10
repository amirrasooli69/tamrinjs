const http = require('http');

console.log('listen on port: 8080');

http.createServer(function (req, res) {
    console.log('response on port:8080');
    // console.log(res);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Helllllllllo world!</h1>');
}).listen(8080);