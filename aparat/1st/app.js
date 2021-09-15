const http = require('http');

const server = http.createServer(function(request, response){
    
    if(request.url === '/'){
        response.end('<h1> your wellcome to papiloo server</h1>')
    }
    if(request.url === '/login'){
        response.end('<h1> you are login to server papiloo</h1>')
    }
    
});

server.listen(1369);
console.log('server is running on port 1369')
