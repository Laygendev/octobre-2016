/**
State that loads all the resources for the game.
Code by Rob Kleffner, 2011
*/

Game.LoadingState = function() {
  this.Zones = {};
  this.ImagesLoaded = false;
  this.ScreenColor = 0;
  this.ColorDirection = 1;
  this.ImageIndex = 0;
  this.SoundIndex = 0;
};

Game.LoadingState.prototype = new Enjine.GameState();

Game.LoadingState.prototype.Enter = function() {
  this.Zones = {
    "head0": {
        "X": "0",
        "Y": "0",
        "Width": 80,
        "Height": 80
    },
    "head1": {
      "X": "80",
      "Y": "0",
      "Width": 80,
      "Height": 80
    },
    "head2": {
      "X": "160",
      "Y": "0",
      "Width": 80,
      "Height": 80
    },
    "body0": {
      "X": "0",
      "Y": "80",
      "Width": 80,
      "Height": 80
    },
    "body1": {
      "X": "80",
      "Y": "80",
      "Width": 80,
      "Height": 80
    },
    "body2": {
      "X": "160",
      "Y": "80",
      "Width": 80,
      "Height": 80
    }
  };

  Enjine.Resources.AddElement("jail/images/elements.png");
  Enjine.Resources.AddZones(this.Zones);
};

Game.LoadingState.prototype.Exit = function() {
  delete this.Zones;
};

Game.LoadingState.prototype.Update = function(delta) {
  if (!this.ImagesLoaded) {
    this.ImagesLoaded = true;
    if (Enjine.Resources.Element.complete !== true) {
      this.ImagesLoaded = false;
    }
  }

  this.ScreenColor += this.ColorDirection * 255 * delta;
  if (this.ScreenColor > 255) {
    this.ScreenColor = 255;
    this.ColorDirection = -1;
  } else if (this.ScreenColor < 0) {
    this.ScreenColor = 0;
    this.ColorDirection = 1;
  }
};

Game.LoadingState.prototype.Draw = function(context) {
  if (!this.ImagesLoaded) {
    var color = parseInt(this.ScreenColor, 10);
    context.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
    context.fillRect(0, 0, 640, 480);
  } else {
    context.fillStyle = "rgb(0, 0, 0)";
    context.fillRect(0, 0, 640, 480);
  }
};

Game.LoadingState.prototype.CheckForChange = function(context) {
  if (this.ImagesLoaded) {
    //set up the global map state variable
    // Game.GlobalMapState = new Game.MapState();

    context.ChangeState(new Game.LevelState());
  }
};
