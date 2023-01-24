class Player {
  constructor() {
    this.position = { x: window.screen.width / 2, y: window.screen.height / 2 }
    this.gameObject = document.querySelector('.player')
    this.speed = 5
    this.attackPs = 1;
    this.hp = 100;
    this.directon = 1;
  }

  async move(key) {
    switch (key) {
      case 'a':
        this.position.x -= this.speed
        this.directon = -1
        break;
      case 'd':
        this.position.x += this.speed
        this.directon = 1
        break;
      case 'w':
        this.position.y -= this.speed
        break;
      case 's':
        this.position.y += this.speed
        break;
    }
    this.gameObject.style.transform = `scale(${this.directon},1)`
  }
  attack(charge){
    charge.spawn(this.directon);
  }
  updateMove() {
    this.gameObject.style.left = `${this.position.x}px`
    this.gameObject.style.top = `${this.position.y}px`
  }

}

export const player = new Player();

