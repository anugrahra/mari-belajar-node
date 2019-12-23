// fs.open()
// untuk membuka dan menulis file
var fs = require('fs');

// flag w (write) - untuk memberitahu fungsi fs.open() jika kita ingin menulis atau membuat file baru. Dan akan menimpa file yang sudah ada.
// flag r (read) - hanya untuk membaca file saja
// untuk flag-flag yang lain sila baca dokumentasi nodejs untuk File System
fs.open('filebaru2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});