require('./globals');
const http = require('http');
const path = require('path');
const fs = require('fs');
const queryStringHandler = require('qs');
const controllers = require('./controllers/ControllerLoader').controllers;
const formidable = require('formidable');
const staticServer = require('node-static');
const staticFileServer = new staticServer.Server(
    configs().publicDir,
    {
        cache: 3600,
        gzip: true
    }
);
const viewServer = new staticServer.Server(
    configs().viewFile,
);

const server = http.createServer((req, res) => {
    req.parsedURL = new URL(path.join(configs().hostname, req.url));
    request(req);
    console.log(req.url);

    route = getControllerMethodName(req);
    getRequestData(req).then((data) => {
        if (req.parsedURL.pathname.search('/api') >= 0) {
            if (controllers[route.controller] != undefined) {
                response = controllers[route.controller][route.method](data);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(response), "binary");
                res.end();
                return;
            }

            res.writeHead(404);
            res.end(route.controller + 'Controller not found!');
            return;
        }

        if (controllers[route.controller] != undefined) {
            viewFile = controllers[route.controller][route.method](data);
            viewServer.serveFile(path.join(configs().viewsDir, viewFile), 200, {}, req, res);
            return;
        }

        staticFileServer.serve(req, res, function (e, response) {
            if (e && (e.status === 404)) { // If the file wasn't found
                viewServer.serveFile(
                    path.join(configs().viewsDir, configs().templates.notFound),
                    404,
                    {},
                    req,
                    res
                );
            }
        });
    });
});

server.listen(8080, () => {
    console.log('listen on port: 8080');
});

async function getRequestData(req) {
    let promise = new Promise((resolve, reject) => {
        let data = queryStringHandler.parse(req.parsedURL.search);

        if (req.method == 'GET') {
            resolve(data);
        }

        let postData = {
            files: {},
            fields: {}
        };
        let pd = new formidable.IncomingForm();
        
        //baraye inke motmaen bashim masire uploade file vojood darad
        // if (!fs.existsSync(configs().uploadDir)) {
        //     fs.mkdirSync(configs().uploadDir);
        // }

        //ravashe dovom upload file ba avaz kardane masire upload file
        // pd.uploadDir = configs().uploadDir;

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

function getControllerMethodName(req) {
    parts = req.parsedURL.pathname.split('/');

    controllerPlace = 1;
    if (req.parsedURL.pathname.search('/api') >= 0) {
        controllerPlace++;
    }

    return {
        controller: (parts[controllerPlace] != undefined ? parts[controllerPlace] : 'Home'),
        method: (parts[controllerPlace + 1] != undefined ? parts[controllerPlace + 1] : 'index')
    };
}

