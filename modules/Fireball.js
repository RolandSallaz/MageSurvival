const body = document.querySelector('main')
const player = document.querySelector('.player')
class Fireball{
    constructor(){
        this.charges = []
        this.chageSpeed = 2;
    }
    spawn(direction){
        const element = document.createElement('div');
        element.classList.add('fireball')

        element.position = {x:Number(player.style.left.replace('px','')),y:Number(player.style.top.replace('px',''))};
        this.charges.push(element)
        body.append(element)
        setTimeout(()=>{
            this.charges.shift()
            element.remove()
          },1000)
        setInterval(()=>{
            element.position.x = direction == 1 ? (Number(element.position.x += this.chageSpeed)) : (Number(element.position.x -= this.chageSpeed));
            element.style.top = `${element.position.y}px`
            element.style.left = `${element.position.x}px`
        },1)

    }

}

export const fireball = new Fireball();