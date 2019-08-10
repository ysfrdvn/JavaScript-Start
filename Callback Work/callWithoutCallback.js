function first() {
    setTimeout(function(){
        console.log("first is done");
    }, 2000);
}

function second(){
    setTimeout(function(){
         console.log("second is done");
    }, 1000);
   
}

function third(){
    console.log("third is done");
}

first();  // done 3
second(); // done 2
third(); // done 1
