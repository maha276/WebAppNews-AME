const http = require('http');
const router = require('./router');
const port = 4000;
const fs = require('fs');
const path = require('path');



const server = http.createServer(router);
server.listen(port);
console.log('server is working in your port '+port);
