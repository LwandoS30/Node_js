const http = require('node:http');

const hostname = '127.0.0.1'; 
const port = 3000;

let myCategory = {
	movies:[
		{name:"action", types:["Working man", "G20","Novocaine"]},
		{name:"Horror", types:["The soul eater", "Infested","Cloune Motel"]},
		{name:"Romance", types:["Forever", "Friends with benefits","Float"]}
],
	series:[
		{name:"animation", types["Bleach", "Naruto","Doctor stone"]},
		{name:"comedy", types:["The studio", "Poppas's house","The cosby show"]},
		{name:"fantasy", types:["scissor seven", "wolf king","The sandman"]}
],
	music:[
		{name:"hip hop", types:["The allegory", "MMLP2","The forever story"]},
		{name:"r&b", types:["Malibu", "The breakthrough","Chocolate Factory"]},
		{name:"kasi rap", types:["The street government", "Impande","Heads and Tales"]}
],
	sports:[
		{name:"Rugby", types:["the springboks", "the all blacks","the wallabies"]},
		{name:"Soccer", types:["Brazil", "Bafana bafana","Spain"]},
		{name:"Cricket", types:["The proteas", "The blues","The windies"]}
]
};

const server = http.createServer((req, res) => {

    console.log(req.url);
    if(req.url === '/myCategory'){
        if(res.method === 'POST'){
            res.statusCode = 200;
            res.setHeader =('Content-Type', 'application/json');
            res.end(JSON.stringify({message: 'created'}));
        }
        else if(res.method === 'DELETE'){
            students.splice(0,1);
            res.statusCode = 200;
            res.setHeader =('Content-Type', 'application/json');
            res.end(JSON.stringify({message: 'deleted'}));
        }
        else if(res.method === 'PUT'){
            students[0] = 'Lwando';
            res.statusCode = 200;
            res.setHeader =('Content-Type', 'application/json');
            res.end(JSON.stringify({message: 'updated', myCategory: myCategory}));
        }
        else  if(res.method === 'GET'){
            res.statusCode = 404;
            res.end();
        }

    }
    else 
    {
        res.statusCode = 404;
        res.setHeader =('Content-Type', 'application/json');
        res.end(JSON.stringify({myCategory: myCategory}));
    }
    

});

server.listen(port,hostname, ()=>{
    console.log('server running');
});