import {Player} from './modules/player.js';
import {Invaders} from './modules/invaders.js';
import {Projectile} from './modules/projectile.js';

var player = new Player(225,450,100,"game-screen");
var invaders = new Array;
var projectiles = new Array;
var evento;

console.log(player);

// FUNCTIONS


document.addEventListener("keydown", (event) =>{
    var key = event.keyCode;
    // !!!Improve movement and achieve greater fluency!!!
    if(player.getPositionPlayerX() > 0){
        if(key == 37){
            player.x = player.x - (player.speed * 5);
            player.ship.setAttribute("x", player.x);
        }
    }
    if(player.getPositionPlayerX() < 450){
        if(key == 39){
            player.x = player.x + (player.speed * 5);
            player.ship.setAttribute("x", player.x);
        }
    }
    // Player shoots
    if(key == 32){
        projectiles.push(new Projectile(player.x + 20,(player.y - 25),"game-screen"));        
        console.log(projectiles);
    }
});

if(projectiles != null){
    console.log("vacio");
}else{
    console.log("lleno");
}

// Invaders Definition
// function generateInvaders(enemies){
//     for(let i = 0; i <= enemies; i++){
//         invaders[i] = new Invaders(5,5);
//     }
//     return invaders;
// }

// console.log(generateInvaders(5));