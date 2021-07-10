const fs = require('fs');
const http = require('http');

var mimeTypes = {
    "html": "text/html",
    "jpeg":"image/jpeg",
    "jpg":"image/jpeg",
    "png":"image/png",
    "svg":"image/svg+xml",
    "json":"application/json",
    "js":"text/javascript",
    "css":"text/css"
};

http.createServer(function (req, res){
    console.log(req.url);
    var urlParts = req.url.split('?');

    if(urlParts[1]) {
        console.log('we have data from parmas');
        console.log(urlParts[1]);
    }
    fs.readFile(__dirname + urlParts[0], function (err, data) {
        if(err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        var mimetype = mimeTypes[urlParts[0].split('.').pop()];

        if(!mimetype) {
            mimetype = 'text/plain';
        }

        res.writeHead(200, {"Content-Type": mimetype});
        res.write(data, "binary");
        res.end();
    });
}).listen(8080);    