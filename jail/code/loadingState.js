/**
State that loads all the resources for the game.
Code by Rob Kleffner, 2011
*/

Game.LoadingState = {
  Zones: {},
  ImagesLoaded: false,
  ScreenColor: 0,
  ColorDirection: 1,
  ImageIndex: 0,
  SoundIndex: 0,

  Enter: function() {
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
  },

  Exit: function() {
    delete this.Zones;
  },

  Update: function(delta) {
    if (!this.ImagesLoaded) {
      this.ImagesLoaded = true;
      if (Enjine.Resources.Element.complete !== true) {
        this.ImagesLoaded = false;
      }
    }
    else {
      Enjine.Application.SetState(Game.BodySelectState);
    }

    this.ScreenColor += this.ColorDirection * 255 * delta;
    if (this.ScreenColor > 255) {
      this.ScreenColor = 255;
      this.ColorDirection = -1;
    } else if (this.ScreenColor < 0) {
      this.ScreenColor = 0;
      this.ColorDirection = 1;
    }
  },

  Draw: function(context) {
    if (!this.ImagesLoaded) {
      var color = parseInt(this.ScreenColor, 10);
      context.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
      context.fillRect(0, 0, 640, 480);
    } else {
      context.fillStyle = "rgb(0, 0, 0)";
      context.fillRect(0, 0, 640, 480);
    }
  },

  ChangeState: function(stateName) {

  }
};
