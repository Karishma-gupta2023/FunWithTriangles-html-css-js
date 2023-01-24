const inputQuestions= document.querySelector(".questions");
const btnSubmit= document.querySelector("#submit");
const outputDiv= document.querySelector("#output");

const answers =["90°", "right angled"];
let index=0;
let score=0;

function checkAnswer(){
var result = new FormData(inputQuestions);

for(let item of result.values()){
    //console.log(item);

   
    if (item == answers[index])
    
    {
    score=score+1;
    }
    index=index+1;
}
outputDiv.innerText ="Your score is " + score;

}

btnSubmit.addEventListener("click", checkAnswer);
