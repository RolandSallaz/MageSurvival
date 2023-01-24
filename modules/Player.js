class Player {
  constructor() {
    this.position = { x: window.screen.width / 2, y: window.screen.height / 2 }
    this.targetPosition = this.position
    this.gameObject = document.querySelector('.player')
    this.speed = 2
    this.attackPs = 1
    this.hp = 100
    this.directon = 1
  }

  async move({ cords }) {
    this.targetPosition = cords
  }
  attack(charge) {
    charge.spawn(this.directon)
  }
  updateMove() {
    this.gameObject.style.transform = `scale(${this.directon},1)`
    if (this.position.x == this.targetPosition.x - this.speed) return
    if (this.position.x == this.targetPosition.x + this.speed) return
    if (this.position.y == this.targetPosition.y - this.speed) return
    if (this.position.y == this.targetPosition.y + this.speed) return
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
    this.gameObject.style.left = `${this.position.x}px`
    this.gameObject.style.top = `${this.position.y}px`
  }
}

export const player = new Player()
