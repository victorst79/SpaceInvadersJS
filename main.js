import {Player} from './modules/player.js';
import {Invaders} from './modules/invaders.js';
import {Projectile} from './modules/projectile.js';

var player = new Player(225,450,100);
var invaders = new Array;
var projectiles = [];

console.log(player);


// Declaration of the object and position
var playerElement = player.ship;
document.getElementById("game-screen").appendChild(playerElement);
playerElement.setAttribute("width",50);
playerElement.setAttribute("height",20);
playerElement.setAttribute("x", player.x);
playerElement.setAttribute("y", player.y);

// Movement Player and limit colision
document.addEventListener("keydown", function move(event){
    var key = event.keyCode;
    if( player.getPositionPlayerX() > 0 && player.getPositionPlayerX() < 450){
        if(key == 37){
            playerElement.setAttribute("x", player.x--);
        }
        if(key == 39){
            playerElement.setAttribute("x", player.x++);
        }
    }
});

function generateInvaders(enemies){
    for(let i = 0; i <= enemies; i++){
        invaders[i] = new Invaders(5,5);
    }
    return invaders;
}

console.log(generateInvaders(5));