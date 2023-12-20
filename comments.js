// Create web server
// 1. Create a web server
// 2. Read the file comments.json
// 3. Send the file to the client
// 4. Listen for requests

// 1. Create a web server
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  // 2. Read the file comments.json
  fs.readFile('comments.json', 'utf-8', function(err, data) {
    // 3. Send the file to the client
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(data);
  });
});

// 4. Listen for requests
