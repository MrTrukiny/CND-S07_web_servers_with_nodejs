const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Responding as text
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('Hello! Sir Isaac Newton is your friend!');

  // Responding as JSON
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    // JSON.stringify() converts a JavaScript object or value to a JSON string
    // It is necessary to convert the object to a string before sending the response
    JSON.stringify({
      id: 1,
      name: 'Sir Isaac Newton',
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); //127.0.0.1 => localhost
