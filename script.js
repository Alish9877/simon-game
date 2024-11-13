const colorarray = ['red' , 'blue' , 'yellow' , 'green' ]

const redbutton = document.querySelector('.red')
const bluebutton = document.querySelector('.blue')
const yellowbutton = document.querySelector('.yellow')
const greenbutton = document.querySelector('.green')
const startbutton = document.querySelector('.start-button')
const quitbutton = document.querySelector('.quit-button')


let sequncecolor = []
let score = 0
let isGameActive = false 
let userSequnce 


const startGame = () => {
  isGameActive = true 
  userSequnce = []
  sequncecolor = []
  // resetGame()
  levelScore()
}

const levelScore = () => {
  score++
  userSequnce = []
}

// const newsq = () => {
  const colorseq = () => {colorarrayMath.floor(Math.random() * 4) + 1;
  sequncecolor.push(colorseq)
  playaudio(color)
  // console.log(colorseq)

}

const playaudio = (color) => {
let realpath = `sounds/${color}.mp3`
let audio = new audio(realpath)
audio.play()
}





const presentsequnce = () => {
  colorarray.forEach 

}



// cosnole.log(presentsequnce)

startbutton.addEventListener('click' , startGame)

