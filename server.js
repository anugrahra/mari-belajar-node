// import library http dari node_modules
var http = require('http');

// membuat objek server
http.createServer(function (req, res) {
  // menentukan response header (html)
  res.writeHead(200, {'Content-Type': 'text/html'});
  // menulis response body / konten yang akan dikirim ke client
  res.write("Halo bos! Tah ini teh <b>nodejs</b>");
  // mengakhiri response
  res.end();
  // menentukan nomor port yang akan digunakan oleh server
}).listen(8000);

console.log("server berjalan di port 8000");