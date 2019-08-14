// const addTwo = function(sayi, callback){
//     let sonuc = sayi + 2;
//     callback(sonuc);
// }
// addTwo(2,function(sonuc){
//     console.log(sonuc);
//     addTwo(sonuc,function(sonuc){
//         console.log(sonuc);
//         addTwo(sonuc,function(sonuc){
//             console.log(sonuc);
//         })
//     })
// })
// üst tarafta 3 kere callback fonksiyon çağırdık. daha basit haline bakalım
const addTwo = (num) =>{
    return new Promise((resolve,reject) => {
        resolve(num + 2);
    })
}

addTwo(2)
    .then((data) => {
        console.log(data);
        return addTwo(data);
    })
    .then((newData) =>{
        console.log(newData);
        return addTwo(newData);
    })
    .then((newData) =>{
        console.log(newData);
    });

    //görüldüğü gibi bu kod daha okunabilir bir kod
