// This is the JS for the server, that can be run using JS

const net = require('net');

const port = 3000;
const hostname = '127.0.0.1';

// Make the server 
const server = net.createServer();

// Get the server to start listening
server.listen(port, hostname, () => {
    console.log("Listening to port: ", port);
});

// What does server on do?
