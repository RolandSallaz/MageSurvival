import Enemy from './modules/Enemy.js'
import { fireball } from './modules/Fireball.js'
import { player } from './modules/Player.js'

const hp = document.querySelector('.hp')
const enemy = new Enemy()

setInterval(() => {
  hp.textContent = `HP: ${player.hp}`
  enemy.move()
  player.updateMove()
  player.gameObject.scrollIntoView({ block: 'center', inline: 'center' })
}, 1000 / 60)

setInterval(() => {
  player.attack(fireball)
}, 1000 / player.attackPs)

document.addEventListener('mousedown', (e) =>
  player.move({ cords: { x: e.offsetX, y: e.offsetY } }),
)
document.addEventListener('mousemove', (e) => {
  if (e.clientX > Number(player.position.x)) {
    player.directon = 1
  } else {
    player.directon = -1
  }
})
