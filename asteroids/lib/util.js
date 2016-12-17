
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
