import { playerElement } from "./constants.js"

class Player {
  constructor() {
    this.position = {
      x: document.body.clientWidth / 2,
      y: document.body.clientHeight / 2,
    }
    this.targetPosition = null
    this.speed = 2
    this.attackPs = 1
    this.hp = 100
    this.directon = 1
  }

  attack(charge) {
    charge.spawn(this.directon)
  }
  updateMove() {
    playerElement.style.transform = `scale(${this.directon},1)`

    if (this.targetPosition) {
      if (this.position.x != this.targetPosition.x && this.position.y != this.targetPosition.y){

      if (this.position.x >= this.targetPosition.x) {
        this.position.x -= this.speed
      } else {
        this.position.x += this.speed
      }
      if (this.position.y >= this.targetPosition.y) {
        this.position.y -= this.speed
      } else {
        this.position.y += this.speed
      }
    }
  }
    playerElement.style.left = `${this.position.x}px`
    playerElement.style.top = `${this.position.y}px`
  }
}

export const player = new Player()
