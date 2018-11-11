import {Player} from './modules/player.js';
import {Invaders} from './modules/invaders.js';
import {Projectile} from './modules/projectile.js';

var player = new Player(225,450,100,"game-screen");
var invaders = new Array;
// var projectiles = new Array;
var evento;
player.print("game-screen");
console.log(player);

// FUNCTIONS

// function bulletAdvance(){
//     var bullets = [...document.querySelectorAll("rect#projectile")];
//     console.log(bullets);
//     if(bullets.length == null){
//         console.log(null);
//     }else{
//         bullets.map( (bullet) => bullets[bullets.length-1].setAttribute("y", bullets.y--));
//     }
    
// }

function createInvaders(n){
    var initX = 40;
    var initY = 20;
    for(let i = 0; i <= n-1; i++){
        invaders.push(new Invaders(initX,initY));
        initX = initX+90;
    }
    for(let j = 0; j <= invaders.length-1; j++){
        invaders[j].print("game-screen");
    }
}

createInvaders(5);

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
        var bullet = new Projectile(player.x + 20,(player.y - 25));
        bullet.print("game-screen");
        // projectiles.push(bullet);
        // console.log(projectiles);
        setInterval(() => {            
            if(bullet.y>0){
                document.getElementById("projectile").setAttribute("y",(bullet.y -= 5));
            }if(bullet.y==0){
                document.getElementById("projectile").remove();
                bullet = "";
            }
        },10);
    }
});

