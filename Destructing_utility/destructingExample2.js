"use strict";
 const hospital = {
   name : "Foo Medikal",
   departments:{
       dep1 :"dentist",
       dep2:{
           name:"Emergency",
           workingtimes: "7/24"
       }
   }
 };
/* old version
 const hospitalName = hospital.name;
 ... hospital.departments.dep2.name

*/

 const {name : hospitalName} = hospital;
 const {departments :{dep1 : department1Name }} = hospital;
 const {departments:{dep2: {name : department2Name}}} = hospital;
 const {departments:{dep2: {workingtimes : workingTimes}}} = hospital;

console.log(`hospital name = ${hospitalName} , department 1 name = ${department1Name} , department 2 name = ${department2Name}, department 2 working hours ${workingTimes}`);