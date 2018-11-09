export class Player{
    constructor(x,y,health){
        // Player's initial position
        this.x = x;
        this.y = y;
        // Player Health
        this.health = health;
        // HTML Element
        this.ship = document.createElementNS("http://www.w3.org/2000/svg","rect");
    }

    getPositionPlayerX(){
        return this.x;
    }

    getPositionPlayerY(){
        return this.y;
    }

    getHealthPlayer(){
        return this.health;
    }
}