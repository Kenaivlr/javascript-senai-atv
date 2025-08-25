const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

//função pra remover o botão de começar quiz e adicionar a caixa de resposta
function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}


function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  //cria novos botões de resposta
  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

//remove os butões de resposta e reseta as classes
function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

//botão de refazer quiz e função de dizer a performace
function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode trancar o curso :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <a 
      onclick=window.location.reload() 
      class="refazer"
    >
      Refazer teste
    </a>
  `
}


const questions = [
    {
        question: "Em um laço “Para i de 0 até 5”, quantas vezes o bloco será executado?",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        question: "Qual estrutura é usada para armazenar múltiplos valores do mesmo tipo?",
        answers: [
            { text: "variable", correct: false },
            { text: "Array", correct: true },
            { text: "Matrix", correct: false },
            { text: "Function", correct: false }
        ]
    },
    {
        question: "Qual é o resultado da expressão lógica: (V OU F) E (F OU F) ?",
        answers: [
            { text: "True", correct: false },
            { text: "undefined", correct: false },
            { text: "null", correct: false },
            { text: "false", correct: true }
        ]
    },
    {
        question: "Em programação, o que significa a expressão x ← x + 1?",
        answers: [
            { text: "Multiplicar o valor de x por 1", correct: false },
            { text: "Somar 1 ao valor atual de x ", correct: true },
            { text: " Atribuir sempre o valor 1 a x", correct: false },
            { text: "Reduzir o valor de x em 1", correct: false }
        ]
    },
    {
        question: "Qual é o valor da expressão 5 % 2?",
       answers: [
            { text: "1", correct: true },
            { text: "0", correct: false },
            { text: "5", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "O que acontece se em um algoritmo o laço “Enquanto” tiver uma condição que nunca se torna falsa?",
        answers: [
            { text: "O programa finaliza normalmente", correct: false },
            { text: "O laço nunca executa", correct: false },
            { text: "O laço se torna infinito", correct: true },
            { text: "O programa ignora o laço", correct: false }
        ]
    },

]