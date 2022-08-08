window.addEventListener('load', bindEvents);
function bindEvents(){
document.getElementById('compute').addEventListener('click', doCalc);
//document.getElementById('salary').addEventListener('keyup', doCalc);
}
function doCalc(){
    // Take Input 
    let basicSalary = document.getElementById('salary').value;
    // Call model
    salaryOperations.basicSalary = basicSalary;
    // const pTag = createPTag(salaryOperations.hra());
    // document.getElementById('output').appendChild(pTag);
   // document.getElementById('hra').innerText = salaryOperations.hra();
   // document.getElementById('da').innerText = salaryOperations.da();
   // alert("Salary Computed...");
    // Print Result
    for(let key in salaryOperations){
        if(key == 'basicSalary'){
            continue;
        }
        document.getElementById('output').
        appendChild( createPTag(key, salaryOperations[key]()));
        // document.getElementById('output').appendChild(pTag);
    }
}

function createPTag(key, val){
    <p>{key} is {val}/p>
    const pTag = document.createElement('p'); //
    pTag.innerText =`${key} is  ${val}`;
    
    return pTag;

}





// DOM I/O
// Input from TextBox

// Call the model


// Print the result on span tag