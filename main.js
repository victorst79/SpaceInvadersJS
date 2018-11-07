import {Player} from './modules/player.js';

var player = new Player(225,450,100);

console.log(player);

var playerElement = player.ship;

document.getElementById("game-screen").appendChild(playerElement);

playerElement.setAttribute("width",50);
playerElement.setAttribute("height",20);
playerElement.setAttribute("x", player.x);
playerElement.setAttribute("y", player.y);

