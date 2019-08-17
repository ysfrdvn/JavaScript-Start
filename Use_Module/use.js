/* 
const ex1 = require("./modul").foo;
const ex2 = require("./modul").bar;
*/
const { ex1, ex2} = require("./modul");

console.log(ex1());
console.log(ex2());
