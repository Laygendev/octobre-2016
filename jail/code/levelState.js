/**
State for actually playing a randomly generated level.
Code by Rob Kleffner, 2011
*/

Game.LevelState = function() {
  this.Paused = false;
  this.Tick = 0;
  this.Delta = 0;

  this.Sprites = null;
  this.SpritesToAdd = null;
  this.SpritesToRemove = null;

  this.GotoLoseState = false;
};

Game.LevelState.prototype = new Enjine.GameState();

Game.LevelState.prototype.Enter = function() {
  this.Sprites = new Enjine.DrawableManager();
  this.Paused = false;
  this.Tick = 0;

  var tmpSprite = new Enjine.SpriteMovable(Enjine.Resources.Images['head0']);
  this.Sprites.Add(tmpSprite);

  this.GotoLoseState = false;
};

Game.LevelState.prototype.Exit = function() {
};

Game.LevelState.prototype.Update = function(delta) {
  this.Delta = delta;

  if (this.Paused) {
  } else {
    this.Sprites.Update(delta);
  }
};

Game.LevelState.prototype.Draw = function(context) {
  this.Sprites.Draw(context);
};

Game.LevelState.prototype.CheckForChange = function(context) {
  if (this.GotoLoseState) {
    // context.ChangeState(new Game.LoseState());
  }
};
