
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
