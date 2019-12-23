var fs = require('fs');

// name file | fungsi
fs.unlink('filebaru2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});