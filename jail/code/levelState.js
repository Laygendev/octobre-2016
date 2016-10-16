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

  this.TimerCreateElement = false;
  this.CurrentTimeToCreate = 0;
  this.TimeToCreateElement = 1;
  this.IntervalSecondFunc = null;
};

Game.LevelState.prototype = new Enjine.GameState();

Game.LevelState.prototype.Enter = function() {
  this.Sprites = new Enjine.DrawableManager();
  this.Paused = false;
  this.Tick = 0;

  this.CreateElement(this);

  this.GotoLoseState = false;
  var _self = this;
  // this.IntervalSecondFunc = setInterval(function() { _self.TickSecond(_self); }, 1000);
};

Game.LevelState.prototype.TickSecond = function(instance) {
  instance.CurrentTimeToCreate++;
  if (instance.CurrentTimeToCreate >= instance.TimeToCreateElement) {
    instance.CurrentTimeToCreate = 0;
    instance.CreateElement(instance);
  }
};

Game.LevelState.prototype.Stop = function() {
  clearInterval(this.IntervalSecondFunc);
}

Game.LevelState.prototype.CreateElement = function(instance) {
  var tmpSprite = new Game.Element(Enjine.Resources.Element, Enjine.Resources.GetRandomZone());
  instance.Sprites.Add(tmpSprite);
};

Game.LevelState.prototype.Exit = function() {
};

Game.LevelState.prototype.Update = function(delta, canvas) {
  this.Delta = delta;

  if (this.Paused) {
  } else {
    this.Sprites.Update(delta, canvas);
  }
};

Game.LevelState.prototype.Draw = function(context) {
  context.imageSmoothingEnabled = false;

  this.Sprites.Draw(context);
};

Game.LevelState.prototype.CheckForChange = function(context) {
  if (this.GotoLoseState) {
    // context.ChangeState(new Game.LoseState());
  }
};
