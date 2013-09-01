var express = require('express');	//import the express lib

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = new Buffer(256);

var htmlfile = "index.html";

buf.write(fs.readFileSync(htmlfile, 'utf8');

app.get('/', function(request, response) {
  response.send('Hello World' + buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
