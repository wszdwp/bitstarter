var express = require('express');

var app = express.createServer(express.logger());

var fs = fs.readFileSync('index.html', 'utf8');

var buf = new Buffer(256);

buf.write(fs, 'utf8');

app.get('/', function(request, response) {
  response.send('Hello World' + buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
