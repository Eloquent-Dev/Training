//variables and default settings
let rand;
let firstDoor = document.getElementById('first-door')
let secondDoor = document.getElementById('second-door')
let thirdDoor = document.getElementById('third-door')
let container = document.getElementById('outer')
let level = document.getElementById('level')
let gameOver = document.getElementById('game-over')
let youWin = document.getElementById('you-win')
let winAudio = new Audio('assets/audio/yaay.m4a')
let failAudio = new Audio('assets/audio/fail.m4a')
let DoorOpen = new Audio('assets/audio/open-door.mp3')
let loadingOverlay = document.getElementsByClassName('loading-overlay')
let currentLevel = 1
let allDoors = document.querySelectorAll('.door')
let doorContainer = document.getElementById('door-container')
gameOver.style.display = 'none'
youWin.style.display = 'none'

setupGame(1)
//functions

function setupGame(lvl){
    let baseDoors = lvl + 2;
    rand = Math.floor(Math.random() * baseDoors) + 1
    console.log(`Level ${lvl} - Correct Door is: ${rand}`);

    doorContainer.innerHTML = "";
    for(let i=1;i<=baseDoors;i++){
        let newDoor = document.createElement('img')
        newDoor.src = 'assets/images/door.png'
        newDoor.classList.add('door')
        newDoor.setAttribute('data-number',i)
        doorContainer.appendChild(newDoor)
        newDoor.addEventListener('click', ()=>{
            checkDoor(i)
        })
    }
}

function checkDoor (chosenDoor) {
  DoorOpen.play()

  loadingOverlay[0].style.display = 'flex'
  setTimeout(() => {
    loadingOverlay[0].style.display = 'none'
      if (chosenDoor === rand) {
        if (currentLevel === 3) {
          container.style.display = 'none'
          youWin.style.display = 'flex'
          winAudio.play()
          console.log('You Win the Game')
        } else {
          currentLevel++
          level.innerHTML = 'Level ' + currentLevel
            setupGame(currentLevel)
        }
      } else {
        container.style.display = 'none'
        gameOver.style.display = 'flex'
        failAudio.play()
        console.log('Game Over')
      }
    
  }, 2000)
}


function Restart () {
  loadingOverlay[0].style.display = 'flex'
  setTimeout(() => {
    loadingOverlay[0].style.display = 'none'
    container.style.display = 'block'
    gameOver.style.display = 'none'
    youWin.style.display = 'none'
    currentLevel = 1
    level.innerHTML = 'Level ' + currentLevel
  }, 2500)

  console.log('----------------Restarted----------------')
  setupGame(1)
}