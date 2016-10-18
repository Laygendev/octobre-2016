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
          "Width": 96,
          "Height": 96
      },
      "head1": {
        "X": "96",
        "Y": "0",
        "Width": 90,
        "Height": 113
      },
      "head2": {
        "X": "186",
        "Y": "0",
        "Width": 100,
        "Height": 96
      },
      "body0": {
        "X": "0",
        "Y": "96",
        "Width": 96,
        "Height": 78
      },
      "body1": {
        "X": "96",
        "Y": "113",
        "Width": 90,
        "Height": 82
      },
      "body2": {
        "X": "186",
        "Y": "96",
        "Width": 100,
        "Height": 82
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
