import { playerElement } from './constants.js'
import { player } from './Player.js'

export default class Enemy {
  constructor() {
    this.hp = 100
    this.speed = 0.3
    this.gameObject = document.querySelector('.enemy')
    this.position = {
      x: 0,
      y: 0,
    }
  }
  move() {
    if (this.position.x > player.position.x) {
      this.position.x -= this.speed
    } else {
      this.position.x += this.speed
    }
    if (this.position.y > player.position.y) {
      this.position.y -= this.speed
    } else {
      this.position.y += this.speed
    }
    this.gameObject.style.left = `${this.position.x}px`
    this.gameObject.style.top = `${this.position.y}px`
    if(this.position == player.position){
        console.log(true)
    }
  }

  checkCollision() {
    if(this.position.x > player.position.x + playerElement.offsetWidth ||
      this.position.x + this.gameObject.offsetWidth < player.position.x ||
      this.position.y > player.position.y + playerElement.offsetHeight ||
      this.position.y + this.gameObject.offsetHeight < player.position.y
      ){
        //no collision
    }
    {
      //collision
    }
  }
}
