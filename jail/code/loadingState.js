/**
Code par Jimmy Latour, 2016
http://labodudev.fr
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
          "Width": 58,
          "Height": 62
      },
      "head1": {
        "X": "58",
        "Y": "0",
        "Width": 58,
        "Height": 62
      },
      "head2": {
        "X": "116",
        "Y": "0",
        "Width": 58,
        "Height": 62
      },
      "body0": {
        "X": "0",
        "Y": "62",
        "Width": 58,
        "Height": 62
      },
      "body1": {
        "X": "58",
        "Y": "62",
        "Width": 58,
        "Height": 62
      },
      "body2": {
        "X": "116",
        "Y": "62",
        "Width": 58,
        "Height": 62
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
      Enjine.Application.SetState(Game.LevelState);
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
  }
};
