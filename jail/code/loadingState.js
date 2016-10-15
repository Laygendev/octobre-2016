/**
State that loads all the resources for the game.
Code by Rob Kleffner, 2011
*/

Game.LoadingState = function() {
  this.Images = {};
  this.ImagesLoaded = false;
  this.ScreenColor = 0;
  this.ColorDirection = 1;
  this.ImageIndex = 0;
  this.SoundIndex = 0;
};

Game.LoadingState.prototype = new Enjine.GameState();

Game.LoadingState.prototype.Enter = function() {
  this.Images = {
    "head0": {
      "Src": "jail/images/elements.png",
      "Size": {
        "Width": 0,
        "Height": 0
      }
    }
  };

  Enjine.Resources.AddImages(this.Images);
};

Game.LoadingState.prototype.Exit = function() {
  delete this.Images;
};

Game.LoadingState.prototype.Update = function(delta) {
  if (!this.ImagesLoaded) {
    this.ImagesLoaded = true;
    var i = 0;
    for (i = 0; i < this.Images.length; i++) {
      if (Enjine.Resources.Images[this.Images[i].name].complete !== true) {
        this.ImagesLoaded = false;
        break;
      }
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
