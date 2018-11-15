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
    constructor(x,y,health){
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
    }

    /**
    * Set the direction in which the object `Player` will move in the game.
    * 
    * @param {String} direction Sense of movement.
    */
    move(direction){
        if(direction == "left"){
            this.x -= 5;
        }else if(direction == "right"){
            this.x += 5;
        }              
    }

    /**
    * Print the HTML element with the modified `x` attribute in the DOM. 
    */
    print(){
        this.ship.setAttribute("x",this.x);
    }

    /**
    *  Returns the value of the `x` position of the `Player` object
    * 
    * @return {Number} x
    */
    getPositionPlayerX(){
        return this.x;
    }

    /**
    * Returns the value of the `y` position of the `Player` object 
    * 
    * @return {Number} y
    */
    getPositionPlayerY(){
        return this.y;
    }

    /**
    * Returns the value of 'Health' of the object `Player` object
    * 
    * @return {Number} health
    */
    getHealthPlayer(){
        return this.health;
    }
}