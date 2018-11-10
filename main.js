import {Player} from './modules/player.js';
import {Invaders} from './modules/invaders.js';
import {Projectile} from './modules/projectile.js';

var player = new Player(225,450,100,"game-screen");
var invaders = new Array;
var projectiles = [];

console.log(player);

// Movement Player and limit colision
// document.addEventListener("keyup", (event) =>{
//     var key = event.keyCode;

//     if(player.getPositionPlayerX() > 0){
//         if(key == 37){
//             player.ship.setAttribute("x", player.x--);
//         }
//     }
//     if(player.getPositionPlayerX() < 450){
//         if(key == 39){
//             player.ship.setAttribute("x", player.x++);
//         }
//     }
// });

document.addEventListener("keydown", (event) =>{
    var key = event.keyCode;
    // Improve movement and achieve greater fluency
    if(player.getPositionPlayerX() > 0){
        if(key == 37){
            player.x = player.x - (player.speed * 3);
            player.ship.setAttribute("x", player.x);
        }
    }
    if(player.getPositionPlayerX() < 450){
        if(key == 39){
            player.x = player.x + (player.speed * 3);
            player.ship.setAttribute("x", player.x);
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