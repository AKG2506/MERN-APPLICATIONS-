// hra , da, ta , gs functions

// eg.
// function hra(basicSalary){
//     return basicSalary * 0.50;
// }
//const object = {key:value, key:value}
const salaryOperations = {
    basicSalary : 0,
   // hra:function(){}
   hra(){ // ES6 ShortHand Object Creation
    return this.basicSalary * 0.50;
   },
   da(){
    return this.basicSalary * 0.20;
   },
   ta(){
    return this.basicSalary * 0.10;
   },
   ma(){
    return this.basicSalary * 0.15;
   }
    
}
