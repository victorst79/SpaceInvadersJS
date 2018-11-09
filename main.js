import {Player} from './modules/player.js';
import {Invaders} from './modules/invaders.js';
import {Projectile} from './modules/projectile.js';

var player = new Player(225,450,100);
var invaders = [];
var projectiles = [];

console.log(player);

// Declaration of the object and position
var playerElement = player.ship;
document.getElementById("game-screen").appendChild(playerElement);
playerElement.setAttribute("width",50);
playerElement.setAttribute("height",20);
playerElement.setAttribute("x", player.x);
playerElement.setAttribute("y", player.y);

// Movement Player
document.addEventListener("keydown", function move(event){
    var key = event.keyCode;
    console.log(key);
    if(key == 37){
        playerElement.setAttribute("x", player.x--);
    }
    if(key == 39){
        playerElement.setAttribute("x", player.x++);
    }
});