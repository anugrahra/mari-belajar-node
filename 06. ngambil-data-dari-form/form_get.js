var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);

  if(q.pathname == "/search/" && req.method === "GET") {
    // ambil parameter dari url
    var keyword = q.query.keyword;

    if (keyword) {
      // ambil data dari form dengan metode GET
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("<h3>Hasil Pencarian:</h3>");
      res.write("<p>Anda Mencari: <b>" + keyword + "</b></p>");
      res.write("<pre>Tidak ada hasil! Website masih dalam pengembangan</pre>");
      res.end("<a href='/search/'>Kembali</a>");
    } else {
      // tampilkan form search
      fs.readFile('search.html', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Gak Nemu");
        }
        // kirim form search.html
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }
  }
}).listen(8000);

console.log('server jalan di port 8000');