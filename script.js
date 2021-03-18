const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")

startButton.addEventListener("click",startGame)
nextButton.addEventListener("click", () => {
	currentQuestionIndex++
	setNextQuestion()
})
const questionContainerElement = document.getElementById("question-container")

let shuffledQuestions, currentQuestionIndex

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}


function setNextQuestion() {
	resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer => {
	const button = document.createElement('button')
	button.innerText=answer.text
	button.classList.add('btn')
	if (answer.correct) {
		button.dataset.correct = answer.correct
	}
	button.addEventListener('click',selectAnswer)
	answerButtonsElement.appendChild(button)
})
}

function resetState() {
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {
		answerButtonsElement
		.removeChild(answerButtonsElement.firstChild)
	}
}


function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
	setStatusClass(button,button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
	nextButton.classList.remove('hide')
} else {
	startButton.innerText = 'Restart'
	startButton.classList.remove('hide')
}
}

function setStatusClass(element,correct) {
	clearStatusClass(element) 
	if (correct) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
	}
}
 
 function clearStatusClass(element) {
 	element.classList.remove('correct')
  	element.classList.remove('wrong')
	
 }


const questions = [
{
	question: "Find Missing Letter ---> FO_EST",
	answers: [
   {text:'R', correct: true},
   {text:'T', correct:false},
   {text:'M', correct:false}
	]
},
{
	question: "Find Missing Letter ---> H_LL",
	answers: [
   {text:'R', correct: false},
   {text:'I', correct:true},
   {text:'T', correct:false}
	]
},
{
	question: "Find Missing Letter ---> FLO_ER",
	answers: [
   {text:'L', correct: false},
   {text:'I', correct:false},
   {text:'W', correct:true}
	]
},
{
	question: "Find Missing Letter ---> FRU_T",
	answers: [
   {text:'L', correct: false},
   {text:'I', correct:true},
   {text:'W', correct:false}
	]
},
{
	question: "Find Missing Letter ---> DON_EY",
	answers: [
   {text:'L', correct: false},
   {text:'K', correct:true},
   {text:'W', correct:false}
	]
},
{
	question: "Fishes Lives In ______",
	answers: [
    {text: "Land", correct: false },
    {text: "Water", correct: true },
    {text: "Earth", correct: false },
    {text: "Fire", correct: false }
	]
},
{
	question: "Paper is Got From _____",
	answers: [
    {text: "Palm Tree", correct: false },
    {text: "Coconut Tree", correct: false },
    {text: "Bamboo Tree", correct: true },
    {text: "Mango Tree", correct: false }
	]
},
{
	question: "A Plant Which Gives Fibre _____",
	answers: [
    {text: "Banana", correct: false },
    {text: "Tulsi", correct: true },
    {text: "Rose", correct: false },
    {text: "Jasmine", correct: false }
	]
},
{
	question: "The Cuckoo Makes A Musical _____",
	answers: [
    {text: "Sound", correct: true },
    {text: "Horn", correct: false },
    {text: "Trumpet", correct: false },
    {text: "Noise", correct: false }
	]
},
{
	question: "A Jasmine Has A Pleasant _____",
	answers: [
    {text: "Vibration", correct: false },
    {text: "Smell", correct: true },
    {text: "Rose", correct: false },
    {text: "Colour", correct: false }
	]
},
{
	question: " MATCH IT { DESERT ----> _____ }",
	answers: [
    {text: "Fish", correct: false },
    {text: "Camel", correct: true },
    {text: "Lion", correct: false },
    {text: "Spice", correct: false }
	]
},
{
	question: " MATCH IT { FOREST ----> _____ }",
	answers: [
    {text: "Fish", correct: false },
    {text: "Camel", correct: false },
    {text: "Lion", correct: true },
    {text: "Spice", correct: false }
	]
},
{
	question: " MATCH IT { LEMON ----> _____ }",
	answers: [
    {text: "Fish", correct: false },
    {text: "Camel", correct: false },
    {text: "Sour", correct: true },
    {text: "Spice", correct: false }
	]
},
{
	question: " MATCH IT { POND ----> _____ }",
	answers: [
    {text: "Fish", correct: true },
    {text: "Camel", correct: false },
    {text: "Lion", correct: false },
    {text: "Spice", correct: false }
	]
},
{
	question: "A ______ is full of trees. ",
	answers: [
    {text: "Land", correct: false },
    {text: "Forest", correct: true }
	]
},
 {
	question: "A ______ has step farms ",
	answers: [
    {text: "Land", correct: false },
    {text: "Hills", correct: true }
	]
},
 {
	question: "A ______ give us shape ",
	answers: [
    {text: "Bone", correct: true },
    {text: "Bird", correct: false }
	]
},
 {
	question: "A ______ is the Slowest Animal ",
	answers: [
    {text: "Snail", correct: true },
    {text: "Tortoise", correct: false }
	]
} ,
{
	question: "Lions and Tigers are found in the forest ",
	answers: [
    {text: "True", correct: true },
    {text: "False", correct: false }
	]
},
 {
	question: "Elephant have small ears",
	answers: [
    {text: "True", correct: false },
    {text: "False", correct: true }
	]
},
 {
	question: "Giraffee is the tallest Animal ",
	answers: [
    {text: "True", correct: true },
    {text: "False", correct: false }
	]
},
{
	question: "A forest has sand dunes",
	answers: [
    {text: "True", correct: true },
    {text: "False", correct: false }
	]
},
{
	question: "step farming is done in the hills",
	answers: [
    {text: "True", correct: true },
    {text: "False", correct: false }
	]
},
{
	question: "BABY NAME 0F HEN IS ______",
	answers: [
    {text: "CHICK", correct: true },
    {text: "CATTLE", correct: false }
	]
},
{
	question: "BABY NAME 0F SHEEP IS ______",
	answers: [
    {text: "KID", correct: true },
    {text: "LAMB", correct: false }
	]
},
{
	question: "BABY NAME 0F HORSE IS ______ ",
	answers: [
    {text: "FOAL", correct: true },
    {text: "CATTLE", correct: false }
	]
},
{
	question: "BABY NAME 0F GOAT IS ______",
	answers: [
    {text: "KID", correct: true },
    {text: "LAMB", correct: false }
	]
},
{
	question: "BABY NAME 0F COW IS ______",
	answers: [
    {text: "CALF", correct: true },
    {text: "CATTLE", correct: false }
	]
},
{
	question: "[FIND ODD ONE OUT] --> SWEET,SOUND,MUSIC",
	answers: [
    {text: "SWEET", correct: true },
    {text: "SOUND", correct: false },
    {text: "MUSIC", correct: false }
	]
},
{
	question: "[FIND ODD ONE OUT] --> ELEPHANT,BEAR,SHEEP",
	answers: [
    {text: "ELEPHANT", correct: false },
    {text: "BEAR", correct: false },
    {text: "SHEEP", correct: true }
	]
},
{
	question: "[FIND ODD ONE OUT] --> SOFT,STICKY,COLOUR",
	answers: [
    {text: "SOFT", correct: false },
    {text: "STICKY", correct: false },
    {text: "COLOUR", correct: true }
	]
},
{
	question: "[FIND ODD ONE OUT] --> PARROT,OWL,SPARROW",
	answers: [
    {text: "PARROT", correct: false },
    {text: "OWL", correct: true },
    {text: "SPARROW", correct: false }
	]
},
{
	question: "[FIND ODD ONE OUT] --> LION,CRANE,CRAB",
	answers: [
    {text: "LION", correct: true },
    {text: "CRANE", correct: false },
    {text: "CRAB", correct: false }
	]
}







]






















