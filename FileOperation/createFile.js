const fs = require("fs");
// 2 yapı var. fs append ve fs write

fs.appendFile("demo2.txt", "merhaba dünya ikinci tekrar", (err)=> { //dosya yoksa yarat. varsa içini silmeden sondan ekle
    if(err)
        throw err;
    console.log("dosyaya ekleme yapıldı");  
    
    fs.writeFile("demo2.txt", "Varolanı Sildim", (err) => { // dosya yoksa yarat. varsa içini sil.
        if(err)
            throw err;
        console.log("tamamlandı");    
    }) // asenkron oldukları için callback cagırma yaptık
});

