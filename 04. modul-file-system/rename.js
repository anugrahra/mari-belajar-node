var fs = require('fs');

// nama file | nama baru | fungsi
fs.rename('filebaru1.txt', 'anjingkamu1.txt', function (err) {
  if (err) throw err;
  console.log('File renamed!');
});