/**
State for actually playing a randomly generated level.
Code by Rob Kleffner, 2011
*/

Game.LevelState = {
  Paused: false,
  Tick: 0,
  Delta: 0,

  Sprites: null,
  SpritesToAdd: null,
  SpritesToRemove: null,

  GotoLoseState: false,

  TimerCreateElement: false,
  CurrentTimeToCreate: 0,
  TimeToCreateElement: 1,
  IntervalSecondFunc: null,

  Enter: function() {
    this.Sprites = new Enjine.DrawableManager();
    this.Paused = false;
    this.Tick = 0;

    this.CreateElement();

    this.GotoLoseState = false;
    this.IntervalSecondFunc = setInterval(Game.LevelState.TickSecond, 1000);
  },

  TickSecond: function() {
    Game.LevelState.CurrentTimeToCreate++;
    if (Game.LevelState.CurrentTimeToCreate >= Game.LevelState.TimeToCreateElement) {
      Game.LevelState.CurrentTimeToCreate = 0;
      Game.LevelState.CreateElement();
    }
  },

  Stop: function() {
    clearInterval(this.IntervalSecondFunc);
  },

  CreateElement: function() {
    var tmpSprite = new Game.Element(Game.LevelState.Sprites, Enjine.Resources.Element, Enjine.Resources.GetRandomZone());
    Game.LevelState.Sprites.Add(tmpSprite);
  },

  Exit: function() {

  },

  Update: function(delta) {
    this.Delta = delta;

    if (this.Paused) {
    } else {
      this.Sprites.Update(delta, canvas);
    }
  },

  Draw: function() {
    this.Sprites.Draw(Enjine.GameCanvas.Context2D);
  },

  CheckForChange: function() {

  }
};
