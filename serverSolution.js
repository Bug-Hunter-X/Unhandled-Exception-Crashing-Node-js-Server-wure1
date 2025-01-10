const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  // ...
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  // Perform cleanup or logging here
  // Consider restarting the server or other recovery strategies
  process.exit(1); // Exit with error code
});

//Simulate an unhandled exception
setTimeout(()=>{throw new Error('This will NOT crash the server!')}, 5000); 