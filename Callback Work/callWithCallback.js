function first(callback)
 {
    setTimeout(function(){
        console.log("first is done");
        callback(third);
    }, 2000);
}

function second(callback)
{
    setTimeout(function(){
         console.log("second is done");
         callback();
    }, 1000);
   
}

function third(){
    console.log("third is done");
}

first(second); // firt is done 1 , second is done 2 , third is done 3.  
