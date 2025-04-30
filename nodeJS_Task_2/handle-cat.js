exports.handleCategoryEndPoint = ((req, res) => {
    if(req.method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({movies:['King Aurther', 'Fast and Furious', '300', 'In Hell'] }));
    }
    else if(req.method ==='POST'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message:'Created', movies:['King Aurther', 'Fast and Furious', '300', 'In Hell'] }));

    }
    else if(req.method === 'DELETE'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'Deleted', movies:['King Aurther', 'Fast and Furious', '300', 'In Hell'] }));

    }
    else if(req.method === 'PUT'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'Updated', movies:['King Aurther', 'Fast and Furious', '300', 'In Hell'] }));

    }
});

