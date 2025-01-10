const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  // ...
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Unhandled exception will crash the server. This is a common issue, but not always handled properly.
setTimeout(()=>{throw new Error('This will crash the server!')}, 5000);