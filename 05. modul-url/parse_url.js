var url = require('url');
var adr = 'https://anugrah.club/post/tag/opini';
var q = url.parse(adr, true);

// hasil parse url
console.log("protocol: " + q.protocol);
console.log("hostname: " + q.host);
console.log("pathname: " + q.pathname);
console.log("params: " + q.search);

var qdata = q.query; // mengambil query sebagai objek
console.log(qdata);