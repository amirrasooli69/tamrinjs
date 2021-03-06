const { default: axios } = require('axios');
const http = require('http');
const option = {
    hostname: 'localhost',
    port: 8080,
    path: '/api1.json?data1=123456',
    method: 'GET'
}

const req = http.request(option, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data' , d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {
    console.error(error);   
});

req.end();
console.log('=====================')
axios.get('localhost:8080').then(res => {
    console.log(res);
})