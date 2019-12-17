var http = require('http');

http.createServer(function(req,res){
  res.end("Hello mantan!");
}).listen(8000);

console.log("server berjalan di port 8000");