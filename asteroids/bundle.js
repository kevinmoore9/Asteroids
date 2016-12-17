/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	const GameView = __webpack_require__(7);

	document.addEventListener("DOMContentLoaded", function() {
	  const canvasEl = document.getElementById("game-canvas");
	  canvasEl.width = Game.DIM_X;
	  canvasEl.height = Game.DIM_Y;

	  const ctx = canvasEl.getContext("2d");
	  const game = new Game();
	  new GameView(ctx, game).starts();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__(2);
	const Asteroid = __webpack_require__(3);
	const Bullet = __webpack_require__(5);
	const Ship = __webpack_require__(6);
	const Util = __webpack_require__(4);
	const GameView = __webpack_require__(7);


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


/***/ },
/* 2 */
/***/ function(module, exports) {

	const MovingObject = function(options){
	  this.pos = options.pos;
	  this.vel = options.vel;
	  this.radius = options.radius;
	  this.color = options.color;
	};

	MovingObject.prototype.draw = function(ctx) {
	  ctx.fillStyle = this.color;
	  ctx.beginPath();

	  ctx.arc(
	    this.pos[0],
	    this.pos[1],
	    this.radius,
	    0,
	    2 * Math.PI,
	    false
	  );
	  ctx.fill();
	};

	MovingObject.prototype.move = function() {
	  let dx = this.vel[0];
	  let dy = this.vel[1];

	  this.pos[0] += dx;
	  this.pos[1] += dy;
	};

	module.exports = MovingObject;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const Util = __webpack_require__(4);
	const MovingObject = __webpack_require__(2);

	const DEFAULTS = {
	  color: "#505050",
	  radius: 3
	};

	const Asteroid = function(options = {}){
	  options.color = DEFAULTS.color;
	  options.radius = DEFAULTS.radius;
	  options.vel = Util.randomVec(1);
	  options.pos = options.pos || Util.randomPos();
	  MovingObject.call(this, options);
	};



	Util.inherits(Asteroid, MovingObject);
	module.exports = Asteroid;


/***/ },
/* 4 */
/***/ function(module, exports) {

	
	const Util = {
	  inherits(childClass, parentClass) {
	    function Surrogate() { this.constructor = childClass; }
	    Surrogate.prototype = parentClass.prototype;
	    childClass.prototype = new Surrogate();
	  },
	  // Return a randomly oriented vector with the given length.
	  randomVec(length) {
	    const deg = 2 * Math.PI * Math.random();
	    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
	  },
	  // Scale the length of a vector by the given amount.
	  scale (vec, m) {
	    return [vec[0] * m, vec[1] * m];
	  },

	  randomPos (maxX, maxY) {
	    const x = Math.floor(maxX * Math.random());
	    const y = Math.floor(maxY * Math.random());
	    return [x, y];
	  }
	};

	module.exports = Util;


/***/ },
/* 5 */
/***/ function(module, exports) {

	
	const Bullet = {

	};


	module.exports = Bullet;


/***/ },
/* 6 */
/***/ function(module, exports) {

	const Ship = {

	};


	module.exports = Ship;


/***/ },
/* 7 */
/***/ function(module, exports) {

	
	const GameView = function(ctx, game) {
	  this.ctx = ctx;
	  this.game = game;
	};

	GameView.prototype.starts = function() {
	  console.log(this.ctx);
	  console.log(this.game);
	  window.setInterval(() => {
	    this.game.move();
	    this.game.draw(this.ctx);
	  }, 20);
	};

	module.exports = GameView;


/***/ }
/******/ ]);