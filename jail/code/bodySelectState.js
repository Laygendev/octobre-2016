/**
State for actually playing a randomly generated level.
Code by Rob Kleffner, 2011
*/

Game.BodySelectState = {
  Paused: false,
  Tick: 0,
  Delta: 0,
  Sprites: null,
  GotoLevelState: false,

  Enter: function() {
    this.Sprites = new Enjine.DrawableManager();
    this.Paused = false;
    this.Tick = 0;

    this.CreateElement();
  },

  CreateElement: function() {
    var tmpSprite = new Enjine.Sprite(this.Sprites, Enjine.Resources.Element, Enjine.Resources.Zones['body0']);
    tmpSprite.SetPos({X: ((document.body.clientWidth / 2) - (Enjine.Resources.Zones['body0'].Width) / 2) - 160, Y: document.body.clientHeight / 2 - Enjine.Resources.Zones['body0'].Height / 2 });
    this.Sprites.Add(tmpSprite);
    delete tmpSprite;
    tmpSprite = new Enjine.Sprite(this.Sprites, Enjine.Resources.Element, Enjine.Resources.Zones['body1']);
    tmpSprite.SetPos({X: ((document.body.clientWidth / 2) - (Enjine.Resources.Zones['body0'].Width) / 2), Y: document.body.clientHeight / 2 - Enjine.Resources.Zones['body1'].Height / 2 });
    this.Sprites.Add(tmpSprite);
    delete tmpSprite;
    tmpSprite = new Enjine.Sprite(this.Sprites, Enjine.Resources.Element, Enjine.Resources.Zones['body2']);
    tmpSprite.SetPos({X: ((document.body.clientWidth / 2) - (Enjine.Resources.Zones['body0'].Width) / 2) + 160, Y: document.body.clientHeight / 2 - Enjine.Resources.Zones['body2'].Height / 2 });
    this.Sprites.Add(tmpSprite);
  },

  Exit: function() {
    this.GotoLevelState = true;
    this.CheckForChange();
  },

  Update: function(delta) {
    this.Delta = delta;

    if (this.Paused) {
    } else {
      this.Sprites.Update(delta, canvas);
    }
  },

  Draw: function(context) {
    context.font = "30px Arial";
    context.fillText("Choix du corps", (document.body.clientWidth / 2) - 100, 120);

    this.Sprites.Draw(context);
  },

  CheckForChange: function() {
    if (this.GotoLevelState) {
      Enjine.Application.SetState(Game.LevelState);
    }
  }
};
