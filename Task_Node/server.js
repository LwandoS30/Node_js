const http = require('node:http');

const hostname = '127.0.0.1'; 
const port = 3002;

let myCategory = 
{
	movies:[
		{name:"Action", types:["Working man", "G20","Novocaine"]},
		{name:"Horror", types:["The soul eater", "Infested","Clown Motel"]},
		{name:"Romance", types:["Forever", "Friends with benefits","Float"]}
    ],
	series:[
		{name:"Animation", types:["Bleach", "Naruto","Doctor stone"]},
		{name:"Comedy", types:["The studio", "Poppas's house","The cosby show"]},
		{name:"Fantasy", types:["Scissor seven", "Wolf king","The sandman"]}
    ],
	music:[
		{name:"Hip Hop", types:["The allegory", "MMLP2","The forever story"]},
		{name:"R&B", types:["Malibu", "The breakthrough","Chocolate Factory"]},
		{name:"Kasi rap", types:["The street government", "Impande","Heads and Tales"]}
    ],
	sports:[
		{name:"Rugby", types:["The springboks", "The all blacks","The wallabies"]},
		{name:"Soccer", types:["Brazil", "Bafana bafana","Spain"]},
		{name:"Cricket", types:["The proteas", "The blues","The windies"]}
    ]
};

const server = http.createServer((req, res) => {
    //console.log(req.method);

    if(req.url === '/myCategory'){

        if(res.method === 'POST'){
            res.statusCode = 200;
            res.setHeader =('Content-Type', 'application/json');
            res.end(JSON.stringify({message: 'created'}));
        }
        else if(res.method === 'DELETE'){
            myCategory.music[1].types[1];
            res.statusCode = 200;
            res.setHeader =('Content-Type', 'application/json');
            res.end(JSON.stringify({message: 'deleted'}));
        }
        else if(res.method === 'PUT'){//UPDATE
            myCategory.series[1].types[3] = 'Sonic Boom';
            res.statusCode = 200;
            res.setHeader =('Content-Type', 'application/json');
            res.end(JSON.stringify({message: 'updated', myCategory: myCategory}));
        }
        else  if(res.method === 'GET'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({myCategory: myCategory}));
        }

    }
    else 
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({myCategory: myCategory}));
    }
    

});

server.listen(port,hostname, ()=>{
    console.log('server running');
});