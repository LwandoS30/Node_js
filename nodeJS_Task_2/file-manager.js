const fs = require('node:fs');
const { open, readFile, appendFile, readFileSync } = require('node:fs');

const FILE_NAME = "db.json";

const createCollection = () => {

    readFile(FILE_NAME, 'utf8', (err, data) => {

        console.log(data);
        const categoryCollection = {
            movies: ['King Aurther', 'Fast and Furious', '300', 'In Hell'],
            songs: ['Ready to die', 'Doctors Advocate','Reasonable Doubt', 'Get Rich or Die Trying'],
            series: ['Mr Robot', 'Game of Thrones', 'Queen of the South', 'Power']
        }

        appendFile(FILE_NAME, JSON.stringify({categoryCollection}), err => {
            if(err) throw err
            console.log('Collection created');
        })
    })
}

exports.createFile = () => {
    open(FILE_NAME, 'wx', (err, fd) => {
        if(err){
            if(err.code === 'EEXIST'){
                console.log('File exists');
                return
            }
            
        }
        else
        {
            //creating collections
            console.log('creating collection');
            createCollection();
        }

    })
}

