// Input from TextBox

// Call the model
//  document.getElementById('clicking').addEventListener("click", function compute()
//  {
//     let basicsalary = document.getElementById('salary').value;
 
// Input from TextBox

// Call the model
let element = document.querySelector('#click').addEventListener('click',compute);
// Print the result on span tag
function compute(){
    let BasicSalary = document.getElementById('salary').value;
      BasicSalary = parseInt(BasicSalary);
    document.getElementById('hra').innerText =  hra(BasicSalary);
    document.getElementById('da').innerText =  da(BasicSalary);
    document.getElementById("ta").innerText = ta(BasicSalary);
    document.getElementById("ma").innerText = ma(BasicSalary);
    document.getElementById("gs").innerText = gs(BasicSalary);
    document.getElementById("tax").innerText = tax(BasicSalary);
    document.getElementById("ns").innerText = ns(BasicSalary);
}