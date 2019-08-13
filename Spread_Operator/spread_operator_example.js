"use strict";
 const array = [4,5,6,7,8,9];
 console.log(array);
 console.log(...array);

 const [variable1,variable2, ...temp] = array;
 console.log(variable1 + " - " + variable2);
// the difference is the following output
 console.log(temp);
 console.log(...temp);