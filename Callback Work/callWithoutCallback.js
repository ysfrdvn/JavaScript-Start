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

first();
second();
third();
