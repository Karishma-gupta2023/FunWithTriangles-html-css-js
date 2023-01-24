const inputAngles = document.querySelectorAll(".inputs");
const btnHyp = document.querySelector("#btn-Check");
const outputDiv = document.querySelector("#outputDiv");


function calculateHypotenuese(){
    let result = Math.sqrt(Number(inputAngles[0].value)**2+ Number(inputAngles[1].value)**2);
    outputDiv.innerText =result;
}

btnHyp.addEventListener("click", calculateHypotenuese);

