var fs = require('fs'),
http = require('http');

var mimetypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "svg": "image/svg+xml",
    "json": "application/json",
    "js": "text/javascript",
    "css": "text/css"
    
};

http.createServer(function(req , res){
    console.log('listen on port: 8080');

    fs.readFile(__dirname + req.url , function (err, data){
        if(err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }

        var mimetype = mimetypes[req.url.split('.').pop()];

        if(!mimetype) {
            mimetype = 'text/plain';
        }

        res.writeHead(200, {"Content-Type": mimetype});
        res.write(data, "binary");
        res.end();
    });
}).listen(8080);