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


const flasheffect = (color) => {
let button = document.querySelector('#color-button')
if (color == '.red')
  button.style.backgroundcolor = 'tomato'
else if (color == '.blue')
  button.style.backgroundcolor = 'lightskyblue'
else if (color == '.yellow')
  button.style.backgroundcolor = 'lightyellow'
else if (color == '.green')
  button.style.backgroundcolor = 'lightgreen'

setTimeout(() => {
  button.attributes.removeNamedItem('style')
}, 300)
}

const presentsequnce = () => {
  let i = 0
  let interval = setInterval(()=>{
    playaudio(sequncecolor[i])
    flasheffect(sequncecolor[i])
    i++
    if (i >= sequncecolor.length) {
      clearInterval(interval)
    }
  })

}

const checkinput = () => {
let lastindex = sequncecolor.length - 1
if (userSequnce[lastindex] != sequncecolor[lastindex])
  endGame()
else if 
(userSequnce[lastindex] == sequncecolor[lastindex])
score++
}

const endGame = () => {
  isGameActive = false
  alert('Game over!!')
}

const handleClick = (event) => { 

}


// cosnole.log(presentsequnce)

startbutton.addEventListener('click' , startGame)