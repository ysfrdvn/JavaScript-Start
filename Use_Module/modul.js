function foo(){
    return "bar";
}

function bar(){
   return "foo";
}


module.exports.ex1 = foo; // burdaki exports. dan sonraki isimle arkada kullanabiliriz
module.exports.ex2 = bar;