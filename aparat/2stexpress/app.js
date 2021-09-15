const express = require('express');
const path = require('path');

const app = express();

// bataye inke zir file va folderhaye zir majmooe adres ra beshnasad
app.use(express.static(__dirname + '/public'));

app.get('/mahdi', (req, res) => {
    res.sendFile(path.resolve(__dirname , 'public/index.html'));
});

app.listen(1369);
console.log('server power on port 1369');