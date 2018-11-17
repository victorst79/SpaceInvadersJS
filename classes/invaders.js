export class Invaders{
    constructor(x,y){
        // Invader's initial position
        this.x = x;
        this.y = y;
        // HTML Element
        this.alien = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.alien.setAttribute("id","alien");
        this.alien.setAttribute("width",20);
        this.alien.setAttribute("height",15);
        this.alien.setAttribute("x", this.x);
        this.alien.setAttribute("y", this.y);
    }

    move(direction){
        if(direction == "left"){
            this.x -= 0.1;
        }else if(direction == "right"){
            this.x += 0.1;
        }else if(direction == "front"){
            this.y += 0.05;
        }
    }

    moveFront(){
        this.y += 0.1;
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