var fs = require('fs');

// flag w+ (write +) - membuka file untuk ditulis dan dibaca
fs.open('filebaru2.txt', 'w+', function (err, file) {
  if (err) throw err;

  // konten yang akan ditulis ke file
  let content = "Hei kamu anjing babi!";

  // menulis konten ke file
  fs.writeFile(file, content, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });

  // membaca file
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    // mengubah buffer menjadi text dengan encode UTF-8
    console.log(data.toString('utf-8'));
  });
});