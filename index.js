import Enemy from "./modules/Enemy.js";
import { fireball } from "./modules/Fireball.js";
import {player} from "./modules/Player.js";

const hp = document.querySelector('.hp')
const enemy = new Enemy();
document.addEventListener('keydown', (evt) => {
  player.move(evt.key)
})
setInterval(() => {
  hp.textContent = `HP: ${player.hp}`
}, 1000 / 60)

setInterval(() => {
  enemy.move()
  player.updateMove()
  player.gameObject.scrollIntoView({block: "center", inline: "center"});
}, 1)

setInterval(()=>{
  player.attack(fireball);
}, 1000 / player.attackPs)


document.addEventListener('mousedown',(e)=>console.log(e))