import {Player} from './classes/player.js';
import {Invaders} from './classes/invaders.js';
import {Projectile} from './classes/projectile.js';

// CLASS
class Game{
    constructor(elementID){
        // VARIABLES
        this.playerMove = false;
        this.directionLeft = false;
        this.directionRight = false;
        this.bullet;
        this.bullets = [];
        this.invader;
        this.invaders = [];
        this.invadersDirection = false;

        // CONST
        const keyShoot = 32;
        const keyLeft = 37;
        const keyRight = 39;

        // GAME SCREEN CREATION
        this.gameScreen = document.createElementNS("http://www.w3.org/2000/svg","svg");
        this.gameScreen.setAttribute("id","game-screen");
        document.getElementById(elementID).appendChild(this.gameScreen);
        

        // PLAYER CREATION
        this.player = new Player(225,450,100);
        this.gameScreen.appendChild(this.player.ship);


        // INVADERS CREATION
        for(let i = 0; i < 3; i++){
            if(i == 0){
                var x = 50;
                var y = 40;
                for(let i = 0; i < 10; i++){
                    this.invader = new Invaders(x,y);
                    this.invaders.push(this.invader);
                    document.getElementById("game-screen").appendChild(this.invader.alien);
                    x+=40;
                }
            }else if(i == 1){
                var x = 50;
                var y = 60;
                for(let i = 0; i < 10; i++){
                    this.invader = new Invaders(x,y);
                    this.invaders.push(this.invader);
                    document.getElementById("game-screen").appendChild(this.invader.alien);
                    x+=40;
                }
            }else if(i == 2){
                var x = 50;
                var y = 80;
                for(let i = 0; i < 10; i++){
                    this.invader = new Invaders(x,y);
                    this.invaders.push(this.invader);
                    document.getElementById("game-screen").appendChild(this.invader.alien);
                    x+=40;
                }
            }
        }

        // EVENTS
        document.addEventListener("keydown", (event) => {
            var key = event.keyCode;
            this.playerMove = true;

            // Player active movements
            if(key == keyLeft){
                event.preventDefault();
                this.directionLeft = true;
            }
            if(key == keyRight){
                event.preventDefault();
                this.directionRight = true;
            }
            
            // Player shoots
            if(key == keyShoot){
                event.preventDefault();
                this.bullet = new Projectile(this.player.x + 20,(this.player.y - 25));
                this.bullets.push(this.bullet);
                document.getElementById("game-screen").appendChild(this.bullet.bullet);

                // SHOOT AUDIO EVENT
                var audio = new Audio('./resources/sounds/shoot.wav');
                audio.play();
            }            
        });

        document.addEventListener("keyup", (event) => {
            var key = event.keyCode;
            this.playerMove = false;

            // Player desactive movements
            if(key == keyLeft){
                this.directionLeft = false;
            }
            if(key == keyRight){
                this.directionRight = false;
            }
        });
    }

    // INITIAL GAME
    init(){
        setInterval(() => {
            var direction = "right";            

           // Player movements
            if(this.playerMove == true){
                // Lateral collisions
                if(this.player.x >= 0){
                    if(this.directionLeft == true){
                        this.player.move("left");
                        this.player.print();
                    }                    
                } 
                if(this.player.x <= 450){
                    if(this.directionRight == true){
                        this.player.move("right");
                        this.player.print();
                    }
                }                
            }else if(this.playerMove == false){}          

            // Advance of the bullets
            if(this.bullets.length != 0){                
                for(let i = 0;i < this.bullets.length; i++){
                    // Top collision
                    if(this.bullets[i].y <= 0){
                        this.bullets[i].bullet.remove();
                    }else{
                        this.bullets[i].move();
                        this.bullets[i].print();
                    }   
                }
            }

            // Advance of the Invaders
            
            

            for(let i = 0; i < this.invaders.length; i++){                
                if(this.invaders[i].x <= 0){
                    this.invadersDirection = true;
                }
                if(this.invaders[i].x >= 500){
                    this.invadersDirection = false;
                }

                if(this.invadersDirection = true){
                    this.invaders[i].move("right");
                    this.invaders[i].move("front");
                    this.invaders[i].print();
                }else{
                    this.invaders[i].move("left");
                    this.invaders[i].move("front");
                    this.invaders[i].print();
                }
                
            }
        },10);
    }
}

// INITIAL THE GAME
new Game("game").init();