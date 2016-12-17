const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid');
const Bullet = require('./bullet');
const Ship = require('./ship');
const Util = require('./util');
const GameView = require('./game_view');


const Game = function () {
  this.asteroids = [];


  this.addAsteroids();
};

Game.DIM_X = 1000;
Game.DIM_Y = 1000;
Game.NUM_ASTEROIDS = 20;

Game.prototype.addAsteroids = function() {
  for (let i=0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({game: this, pos: Util.randomPos(Game.DIM_X, Game.DIM_Y)}));
  }
};

Game.prototype.draw = function(ctx) {
  // pass stuff into clear Rect
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.move = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
};

module.exports = Game;
