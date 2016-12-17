const Util = require("./util");
const MovingObject = require("./moving_object");

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
