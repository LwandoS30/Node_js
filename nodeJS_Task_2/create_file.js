const http = require('node:http');
const url = require('url');

const { handleCategoryEndPoint } = require('./handle-cat');
const { createFile } = require('./file-manager');

const hostname = "127.0.0.1";
const port = 3002;

const server = http.createServer((req,res) => {
    if(req.url === '/movies'){
        handleCategoryEndPoint(req, res);

    }
    else if(req.url === '/songs'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'appliaction/json');
        res.end(JSON.stringify({songs: ['Ready to die', 'Doctors Advocate', 'Reasonable Doubt', 'Get Rich or Die Trying']} ));

    }
    else if(req.url === '/series') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'appliaction/json');
        res.end(JSON.stringify({series: ['Mr Robot', 'Game of Thrones', 'Queen of the South', 'Power']} ));

    }
    else if(req.method === '/'){
        res.statusCode = 404;
        res.setHeader('Content-Type', 'appliaction/json')
        res.end();
    }
    
});

createFile();

server.listen(port, hostname, () => {
    console.log('server is running smoothly');
});