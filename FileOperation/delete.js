const fs = require("fs");

fs.unlink("demo3.txt", (err) => {
    if(err)
        throw err;
    console.log("dosya silindi");   
})