const fs = require('fs');
const http = require('http');
const path = require('path');
const mimeTypes = require('mime-types');
const configs = require('./configs/configs').configs;
const queryStringHandler = require('qs');
const controllers = require('./controllers/ControllerLoader').controllers;
const formidable = require('formidable');


const staticFileServer = new staticServer.Server(
    configs.publicDir,
    {
        cache: 3600,
        gzip: true
    }
);

const viewServer = new staticServer.Server(
    configs.viewFile,
);


const server = http.createServer((req, res) => {
    console.log(req.url);

    req.parsedURL = new URL(path.join(configs.hostname, req.url));
    route = getControllerMethodName(req);
    getRequestData(req).then((data) => {
        
    // agar donbale api bashim 
    if(req.parsedURL.pathname.search('/api') >= 0) {
        route = getAPIControllerMethodName(req);

        if(controllers[route.controller] != undefined) {
            response = controllers[route.controller][route.method](data);
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify(response), "binary");
            res.end();
            return;
        }

        res.writeHead(404);
        res.end(route.controller + 'Controller not found!');
        return;
    }

    if(controllers[route.controller] != undefined) {
        viewFile = controllers[route.controller][route.method](data);
        viewServer.serveFile(path.join(configs.viewsDir, viewFile), 200, {}, req, res);
        return;
    }

    staticFileServer.serve(req, res, function (e, response){
        if(e && (e.status === 404)) { // if the file wasn't file
            viewServer.serveFile(
                path.join(configs.viewsDir, configs.templates.notFound),
                404,
                {},
                req,
                res
            );
        }
    });
    });


    // agar donbale api nabashim
    let filePath = path.join(__dirname, req.parsedURL.pathname);
    fs.readFile(filePath, (err, data) => {
        if(err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }

        let mimeType = mimeTypes.lookup(filePath);
        res.writeHead(200, {"Content-Type": mimeType});
        res.write(data, "binary");
        res.end();
    });

});

server.listen(8080, () => {
    console.log('listen on port 8080');
});

async function getRequestData(req) {
    let promise = new Promise((resolve, reject) => {
        let data = queryStringHandler.parse(req.parsedURL.search);
    

    if(req.method == 'GET') {
        resolve(data);
    }

    let postData = {
        files: {},
        fields: {}
    };

    let pd = new formidable.IncomingForm();
    pd.parse(req, (err, fields, files) => {
        postData.fields = Object.assign(postData.fields, fields);
        postData.files = Object.assign(postData.files, files);
    });

    pd.on('end', (fields, files) => {
        data = Object.assign(data, postData);
        resolve(data);
    });
    

    })

    return await promise;
}
function getAPIControllerMethodName(req) {
    part = req.parsedURL.pathname.split('/');

    return {
        controller: (parts[2] != undefined ? parts[2]: 'Home'),
        method: (parts[3] != undefined ? parts[3]: 'index')
    };
}