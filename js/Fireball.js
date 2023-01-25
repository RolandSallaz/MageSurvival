import { main,playerElement } from "./constants.js";
import { player } from "./Player.js";

class Fireball{
    constructor(){
        this.charges = []
        this.chageSpeed = 10;
    }
    spawn(direction){
        const element = document.createElement('div');
        element.classList.add('fireball')
        if (player.directon == 1){
            element.style.transform = 'rotate(180deg)'
        }
        element.position = {x:Number(playerElement.style.left.replace('px','')),y:Number(playerElement.style.top.replace('px',''))};
        this.charges.push(element)
        main.append(element)
        setTimeout(()=>{
            this.charges.shift()
            element.remove()
          },1000)
        setInterval(()=>{
            element.position.x = direction == 1 ? (Number(element.position.x += this.chageSpeed)) : (Number(element.position.x -= this.chageSpeed));
            element.style.top = `${element.position.y}px`
            element.style.left = `${element.position.x}px`
        },1000/60)

    }

}

export const fireball = new Fireball();