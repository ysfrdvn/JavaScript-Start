"use strict";
 const people = {
    name : "john",
    surname: "wick"
}
//old version
const name = people.name;
const surname = people.surname;
console.log(`my name is ${name} , my surname is ${surname}`);


/*
//new version 
const{name , surname} = people;
console.log(`my name is ${name} , my surname is ${surname}`);*/