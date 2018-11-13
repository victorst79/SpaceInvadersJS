export class Player{
    /**
    * Create a `Player` object, which will get all the player functions in the game.
    * The constructor itself generates an element in the DOM.
    * 
    * @param {Number} x Position X in game.
    * @param {Number} y Position Y in game.
    * @param {Number} health Player Health.
    * @param {String} elementID ID or Class of element.
    */
    constructor(x,y,health,elementID){
        // Player's initial position
        this.x = x;
        this.y = y;
        // Speed
        this.speed = 1;
        // Player Health
        this.health = health;
        // HTML Element
        this.ship = document.createElementNS("http://www.w3.org/2000/svg","rect");  
        this.ship.setAttribute("id","player");
        this.ship.setAttribute("width",50);
        this.ship.setAttribute("height",20);
        this.ship.setAttribute("x", this.x);
        this.ship.setAttribute("y", this.y);
        document.getElementById(elementID).appendChild(this.ship);      
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