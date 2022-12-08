'use strict';

const http = require('http');

const storage = require('./carStorage');

console.log(storage.getAllCars());

const port = 3000;
const host = 'localhost';

const server = http.createServer((req,  res) =>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8)'});
    res.end(createHtmlPage());
});

server.listen(port, host, () => console.log(`Server ${host}:${port} is running...`));

function createHtmlPage(){
   let htmlString = '<h1>Cars<h1>'
    return htmlString;
}