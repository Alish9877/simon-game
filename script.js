const colorArray = ['red', 'blue', 'yellow', 'green']

const redButton = document.querySelector('.red')
const blueButton = document.querySelector('.blue')
const yellowButton = document.querySelector('.yellow')
const greenButton = document.querySelector('.green')
const startButton = document.querySelector('.start-button')
const quitButton = document.querySelector('.quit-button')
const statusms = document.querySelector('.status')
const level = document.querySelector('.level')

let sequenceColor = []
let score = 0
let isGameActive = false
let userSequence = []

const startGame = () => {
  isGameActive = true
  userSequence = []
  sequenceColor = []
  score = 0
  levelScore()
  presentSequence()
}

const levelScore = () => {
  score++
  userSequence = []
  const color = colorArray[Math.floor(Math.random() * 4)]
  sequenceColor.push(color)
level.textContent = `level: ${score}`
}


const flashEffect = (color) => {
  const button = document.querySelector(`.${color}`)
  button.style.backgroundColor = getFlashColor(color)

  setTimeout(() => {
    button.style.backgroundColor = ''
  }, 300)
};

const getFlashColor = (color) => {
  const flashColors = {
    red: 'tomato',
    blue: 'lightskyblue',
    yellow: 'lightyellow',
    green: 'lightgreen',
  };
  return flashColors[color]
};

const presentSequence = () => {
  let i = 0
  const interval = setInterval(() => {
    flashEffect(sequenceColor[i])
    i++
    if (i >= sequenceColor.length) {
      clearInterval(interval)
    }
  }, 600)
}


const checkinput = () => {
  const lastIndex = userSequence.length - 1
  if (userSequence[lastIndex] !== sequenceColor[lastIndex]) {
    statusms.textContent = `Game Over! Your score: ${score}`
    endGame()
  } else if (userSequence.length === sequenceColor.length) {
    levelScore()
    setTimeout(presentSequence, 1000)
  }
}


const handleClick = (event) => {
  const color = event.target.classList[0];
  if (isGameActive) {
    userSequence.push(color)
    flashEffect(color)
    checkinput()
  }
}

const endGame = () => {
  isGameActive = false
}

redButton.addEventListener('click', handleClick)
blueButton.addEventListener('click', handleClick)
yellowButton.addEventListener('click', handleClick)
greenButton.addEventListener('click', handleClick)
startButton.addEventListener('click', startGame)