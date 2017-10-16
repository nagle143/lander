import './index.css';
import Terrain from './terrain';
import Ship from './ship.js';

var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
var context = canvas.getContext('2d');
document.body.appendChild(canvas);


var terrain = new Terrain(500,500);
terrain.render(context);

var ship = new Ship(500, 500);
ship.render(context);
