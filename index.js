var http = require('http');

var port = process.env.PORT || 3000;
var data;

http.createServer(function(req, res) {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      var data = JSON.parse(body);
      console.log(data.action)
      console.log(data.label.name)
      console.log(data.pull_request.head.sha)
      console.log(data.pull_request.head.ref)
      body = ''
    });

  res.writeHead(200, {'Content-Type' : 'text/plain'});
  console.log(req)
  res.end('OK\n');

}).listen(port, '0.0.0.0');
