const express = require('express');
const path = require('path');

const app = express();

app.set('view engine' , 'vash');
// bataye inke zir file va folderhaye zir majmooe adres ra beshnasad mesle ax ya file css
app.use(express.static(__dirname + '/views'));

app.get('/amir/:x', (req, res) => {
    // res.sendFile(path.resolve(__dirname , 'public/index.html'));
    res.render('index',{url: req.url , data: ['Ali','Amir','Hasan', 'Vahid']});
})

app.listen(8080);
console.log('server power on port 1369');