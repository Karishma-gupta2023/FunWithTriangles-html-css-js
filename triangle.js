const inputAngles = document.querySelectorAll(".inputs");
const btnTriangle = document.querySelector("#btn-Check");
const outputDiv = document.querySelector("#outputDiv");



function isTriangle()
{    
    let result=calculateSumOfAngles(Number(inputAngles[0].value), Number(inputAngles[1].value), Number(inputAngles[2].value));

  if(result===180){
  outputDiv.innerText = "Yay, sum of angles form a triangle";
  }
 else{
    outputDiv.innerText = "OOPS, sum of angles do not form a triangle";
 
}}

function calculateSumOfAngles(angle1, angle2, angle3)
{

    let sum = angle1+angle2+angle3;
    return sum;

}

btnTriangle.addEventListener("click", isTriangle);