const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./routes'); // be soorate default index.js mikhanad

const app = express();

// bataye inke zir file va folderhaye zir majmooe adres ra beshnasad mesle ax ya file css
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(appRouter);




app.listen(8080);
console.log('server power on port 8080');