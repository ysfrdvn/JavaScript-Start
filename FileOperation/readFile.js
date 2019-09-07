const fs = require('fs');
/*
const reader = fs.readFileSync("demo.txt"); SENKRON YAPI
console.log(reader.toString());
*/
fs.readFile("demo.txt", (error, data) => {
    if(error)
        console.log(error);
    
   console.log(data.toString());
});
console.log("dosya okuma işlemi bitti");
