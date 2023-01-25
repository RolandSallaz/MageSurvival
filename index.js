import { playerElement, main } from './js/constants.js'
import Enemy from './js/Enemy.js'
import { fireball } from './js/Fireball.js'
import { player } from './js/Player.js'

const hp = document.querySelector('.hp')
const enemy = new Enemy()
const decor = {
  stones: 1000,
}

function getRandomInt({min = 0,max}) {
  return Math.floor(min + Math.random() * (max - min));
}

for (let index = 0; index < decor.stones; index++) {
  const randomSize = getRandomInt({min:30,max:80});
  const stone = document.createElement('div')
  stone.classList.add('stone')
  stone.style.left = `${getRandomInt({max:document.body.clientWidth})}px`
  stone.style.top = `${getRandomInt({max:document.body.clientHeight})}px`
  stone.style.transform = `rotate(${getRandomInt({max:360})}deg)`
  stone.style.height = `${randomSize}px`
  stone.style.width = `${randomSize}px`
  main.append(stone);
  index++
}
setInterval(() => {
  hp.textContent = `HP: ${player.hp}`
  player.updateMove()
  playerElement.scrollIntoView({ block: 'center', inline: 'center' })
}, 1000 / 60)

setInterval(() => {
  player.attack(fireball)
}, 1000 / player.attackPs)

document.addEventListener(
  'mousedown',
  (e) => (player.targetPosition = { x: e.pageX - (playerElement.offsetWidth/2), y: e.pageY - (playerElement.offsetHeight / 2) }),
)

document.addEventListener('mousemove', (e) => {
  if (e.offsetX > Number(player.position.x)) {
    player.directon = 1
  } else {
    player.directon = -1
  }
})
