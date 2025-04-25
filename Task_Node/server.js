const http = require('node:http');

const hostname = '127.0.0.1'; 
const port = 3002;

//2)
let movies = ["Working man", "G20","Novocaine","The soul eater"];
let series = ["Bleach", "Naruto","Doctor stone","The studio"];
let music = ["The allegory", "MMLP2", "The breakthrough","Chocolate Factory"];
let sports = ["Rugby","Soccor","Cricket","Volly ball"];
  
//3)

//1)

const handleCategoryEndPoint = (req, res) => {
    //console.log(req.method);
    if(req.method === 'POST'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'created'}));
    }
    else if(req.method === 'DELETE'){
        series.splice(0,1);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'deleted', series: seri}));
    }
    else if(req.method === 'PUT'){//UPDATE
        series[3] = 'Sonic Boom';
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'updated', series: series}));
    }
    else  if(req.method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({series: series}));
    }

};

const server = http.createServer((req, res) => {
    if(req.url === '/movies'){ 
        if(req.method === 'POST'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: 'created'}));
        }  
        else if(req.method === 'DELETE'){
            movies.splice(0, 1);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: 'Deleted'}));
        }
        else if(req.method === 'PUT'){
            movies[0] = "King Aurther"
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: 'created'}));
        } 
        else if(req.method === 'GET'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({movies: movies}));
        }


    }
    else if(req.url === '/series'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({series: series}));

    }
    else if(req.url === '/music'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'appliaction/json');
        res.end(JSON.stringify({music: music}));

    }
    else{
        res.statusCode = 404;
        res.end();
    }

});

server.listen(port, hostname, ()=>{
    console.log('server running smoothly');
});
