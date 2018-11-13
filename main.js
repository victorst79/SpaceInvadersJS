import {Player} from './classes/player.js';
import {Invaders} from './classes/invaders.js';
import {Projectile} from './classes/projectile.js';

var player = new Player(225,450,100,"game-screen");
var invaders = new Array;

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

// 

document.addEventListener("keydown", (event) => {
    var key = event.keyCode;
    
    // Player mevements
    if(player.x > 0){
        if(key == 37){
            player.x = player.x - (player.speed * 5);
            player.ship.setAttribute("x", player.x);
        }
    }
    if(player.x < 450){
        if(key == 39){
            player.x = player.x + (player.speed * 5);
            player.ship.setAttribute("x", player.x);
        }
    }

    // Player shoots
    if(key == 32){
        var bullet = new Projectile(player.x + 20,(player.y - 25),"game-screen");
        var audio = new Audio('./resources/sounds/shoot.wav');
        audio.play();
    }
});

var bullets;
var bulletsPosition;
setInterval( () => {
    bullets = document.getElementsByClassName("projectile");
    for(let i = 0; i < bullets.length; i++){ 
        bulletsPosition = parseInt(bullets[i].getAttribute("y"));
        bullets[i].setAttribute("y", bulletsPosition - 5);

        if(bulletsPosition <= 0){
            bullets[i].remove();
        }
    }

}, 10);