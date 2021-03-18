const problemElement = document.querySelector(".problem")
const ourForm = document.querySelector(".our-form")
const ourField = document.querySelector(".our-field")
const pointsNeeded = document.querySelector(".points-needed")
const mistakesAllowed = document.querySelector(".mistakes-allowed")
const progressBar = document.querySelector(".progress-inner")
const endMessage = document.querySelector(".end-message")
const resetButton = document.getElementById("reset-button")

let state = {
    score: 0,
    wrongAnswer: 0
}

function updateProblem(){
    state.currentProblem = generateProblem()
    problemElement.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
    ourField.value = ""
    ourField.focus()
}
updateProblem()


function generateNumber(max){
    return Math.floor(Math.random(max) * (max + 1))
}

function generateProblem(){
    return {
        numberOne: generateNumber(10),
        numberTwo: generateNumber(10),
        operator: ["+", "-", "x"] [generateNumber(2)]
    }
}

 ourForm.addEventListener("submit", handleSubmit)
function handleSubmit(e){
e.preventDefault()

let correctAnswer
const prob = state.currentProblem

if(prob.operator == "+") correctAnswer = prob.numberOne + prob.numberTwo
if(prob.operator == "-") correctAnswer = prob.numberOne - prob.numberTwo
if(prob.operator == "x") correctAnswer = prob.numberOne * prob.numberTwo

if(parseInt(ourField.value, 10) === correctAnswer){
  state.score++
  pointsNeeded.innerHTML = 10 - state.score
  updateProblem()
 renderProgressBar()
  
} else {
state.wrongAnswer++
mistakesAllowed.innerHTML = 2 - state.wrongAnswer
problemElement.classList.add("animate-fun");
setTimeout(() => {problemElement.classList.remove("animate-fun")},331 )
}
checkLogic()
}

function checkLogic(){
    //if you win
   if(state.score === 10){
       endMessage.textContent = "Congrats, You Acheived!";
       document.body.classList.add("overlay-is-open");
       setTimeout(() => {resetButton.focus()}, 331)
   }

    //if you lost
    if(state.wrongAnswer===3){
        endMessage.textContent = "Sorry! No Points Available";
       document.body.classList.add("overlay-is-open");
       setTimeout(() => {resetButton.focus()}, 450)
    }
}

resetButton.addEventListener("click",resetGame)

function resetGame(){
    document.body.classList.remove("overlay-is-open")
    updateProblem()
    state.score=0
    state.wrongAnswer=0
    pointsNeeded.innerHTML=10
    mistakesAllowed.innerHTML=2
    renderProgressBar()
}

function renderProgressBar(){
    progressBar.style.transform = `scaleX(${state.score / 10})`
}
