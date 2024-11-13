const colorarray = ['red' , 'blue' , 'yellow' , 'green' ]

const redbutton = document.querySelector('.red')
const bluebutton = document.querySelector('.blue')
const yellowbutton = document.querySelector('.yellow')
const greenbutton = document.querySelector('.green')
const startbutton = document.querySelector('start-button')
const quitbutton = document.querySelector('quit-button')


let sequncecolor = []
let score = 0
let isGameActive = false 
let userSequnce 


const startGame = () => {
  isGameActive = true 
  userSequnce = []
  sequncecolor = []
  resetGame()
  levelScore()
}

const levelScore = () => {
  score++
  userSequnce = []
}

// const newsq = () => {
  const colorseq = colorarray[Math.floor(Math.random()*colorarray.length)];
  sequncecolor.push(colorseq)
  console.log(colorseq)
// }


// startbutton.addEventListener(click , 'start')
