export class Projectile{
    constructor(x,y){
        this.x = x;
        this.y = y;
        // HTML Element
        this.bullet = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.bullet.setAttribute("class","projectile");
        this.bullet.setAttribute("width",10);
        this.bullet.setAttribute("height",25);
        this.bullet.setAttribute("x", this.x);
        this.bullet.setAttribute("y", this.y);
    }

    move(){
        this.y -= 5;       
    }

    print(){
        this.bullet.setAttribute("y",this.y);
    }

    getPositionX(){
        return this.x;
    }

    getPositionY(){
        return this.y;
    }
}