// fs.appendFile()
// membuat dan mengisi file
// ia akan selalu menambah isi dari file setiap dieksekusi
var fs = require('fs');

// membuat file dengan nama filebaru1.txt
fs.appendFile('filebaru1.txt', 'Hey kamu anjing!', function(err) {
  if (err) throw err;
  console.log('Saved!');
});