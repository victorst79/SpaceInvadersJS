export class Invaders{
    constructor(x,y){
        // Invader's initial position
        this.x = x;
        this.y = y;
        // HTML Element
        this.alien = document.createElementNS("http://www.w3.org/2000/svg","rect");
    }

    print(elementID){
        this.alien.setAttribute("id","alien");
        this.alien.setAttribute("width",50);
        this.alien.setAttribute("height",30);
        this.alien.setAttribute("x", this.x);
        this.alien.setAttribute("y", this.y);
        document.getElementById(elementID).appendChild(this.alien);
    }

    positionX(){
        return this.x;
    }

    positionY(){
        return this.y;
    }
}