/**
Code par Jimmy Latour, 2016
http://labodudev.fr
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

  SelectedBody: "head0",

  Enter: function() {
    this.Sprites = new Enjine.DrawableManager();
    this.Paused = false;
    this.Tick = 0;

    this.CreateCharacter();
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

  CreateCharacter: function() {
    var tmpCharacter = new Enjine.Character(Game.LevelState.Sprites, Enjine.Resources.Element, Enjine.Resources.Zones[this.SelectedBody]);
    Game.LevelState.Sprites.Add(tmpCharacter);
  },

  CreateElement: function() {
    var zoneName = Enjine.Resources.GetRandomZoneName();
    var tmpSprite = new Game.Element(zoneName, Game.LevelState.Sprites, Enjine.Resources.Element, Enjine.Resources.Zones[zoneName]);
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
