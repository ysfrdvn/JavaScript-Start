function doIt(){ // bitiş habercisi
    console.log("Interval is done...")
}
function upNo() {
    console.log(no++);
    if(no > 5){
        clearInterval(printByIncrement);
        var done = setTimeout(doIt, 1000); // callback ile fonksyonum bitince cağırma emri
    }
}
var no = 1
var printByIncrement = setInterval(upNo, 1000);
