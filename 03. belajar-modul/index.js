// import modul momentjs
var moment = require("moment");
// import modol heyanjingjs
var heyanjing = require("./heyanjing");

// menggunakan modul momentjs
console.log(heyanjing.anjing());
console.log("Sekarang: " + moment().format('D MMMM YYYY, h:mm:ss a'));