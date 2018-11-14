import {Player} from './classes/player.js';
import {Invaders} from './classes/invaders.js';
import {Projectile} from './classes/projectile.js';


var invaders = new Array;

// CLASS

class Game{
    constructor(elementID){
        // VARIABLES
        this.playerMove = false;
        this.playerDirection = "";

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

        // EVENTS
        document.addEventListener("keydown", (event) => {
            var key = event.keyCode;
            
            if(key == keyLeft){
                this.playerMove = true;
                this.playerDirection = "left";
            }else if(key == keyRight){
                this.playerMove = true;
                this.playerDirection = "right";
            }

            // Player shoots
            else if(key == keyShoot){
                var bullet = new Projectile(player.x + 20,(player.y - 25),"game-screen");
                var audio = new Audio('./resources/sounds/shoot.wav');
                audio.play();
            }
        });

        document.addEventListener("keyup", (event) => {
            var key = event.keyCode;
            
            if(key == keyLeft){
                this.playerMove = false;
            }
            else if(key == keyRight){
                this.playerMove = false;
            }
        });
    }

    // INITIAL GAME
    init(){
        setInterval(() => {
            if(this.playerMove == true){
                if(this.playerDirection == "left"){
                    this.player.move(this.playerDirection);
                    this.player.print();
                }else if(this.playerDirection == "right"){
                    this.player.move(this.playerDirection);
                    this.player.print();
                }
            }
            if(this.playerMove == false){

            }
        },10);
    }
}

new Game("game").init();

// FUNCTIONS

function createInvaders(n){
    var initX = 40;
    var initY = 20;
    for(let i = 0; i <= n-1; i++){
        invaders.push(new Invaders(initX,initY,"game-screen"));
        initX = initX+90;
    }
}

createInvaders(5);



// LOOP GAME
// var bullets;
// var bulletsPosition;
// setInterval( () => {
//     bullets = document.getElementsByClassName("projectile");
//     for(let i = 0; i < bullets.length; i++){ 
//         bulletsPosition = parseInt(bullets[i].getAttribute("y"));
//         bullets[i].setAttribute("y", bulletsPosition - 5);

//         if(bulletsPosition <= 0){
//             bullets[i].remove();
//         }
//     }

// }, 10);