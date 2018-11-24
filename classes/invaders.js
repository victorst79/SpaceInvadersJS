export class Invaders{
    constructor(x,y){
        // Invader's initial position
        this.x = x;
        this.y = y;
        this.counter = 0;
        // HTML Element
        this.alien = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.alien.setAttribute("id","alien");
        this.alien.setAttribute("width",20);
        this.alien.setAttribute("height",15);
        this.alien.setAttribute("x", this.x);
        this.alien.setAttribute("y", this.y);
    }

    move(){
        this.counter++;
        if(this.counter == 100){
            this.y += 1;
            this.counter = 0;
        }
        if(this.counter >= 0 && this.counter <= 19){
            this.x += 0.5;
        }
        if(this.counter >= 80 && this.counter <= 99){
            this.x -= 0.5;
        }
    }

    print(){
        this.alien.setAttribute("x",this.x);
        this.alien.setAttribute("y",this.y);
    }

    positionX(){
        return this.x;
    }

    positionY(){
        return this.y;
    }
}