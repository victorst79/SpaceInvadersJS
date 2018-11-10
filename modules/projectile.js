export class Projectile{
    constructor(x,y,elementID){
        this.x = x;
        this.y = y;
        // HTML Element
        this.bullet = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.bullet.setAttribute("id","projectile");
        this.bullet.setAttribute("width",10);
        this.bullet.setAttribute("height",25);
        this.bullet.setAttribute("x", this.x);
        this.bullet.setAttribute("y", this.y);
        document.getElementById(elementID).appendChild(this.bullet);
    }

    getPositionX(){
        return this.x;
    }

    getPositionY(){
        return this.y;
    }
}