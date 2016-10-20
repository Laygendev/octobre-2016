/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

Game.LoadingState = {
  Zones: {},
  ZonesBodies: {},
  ImagesLoaded: false,
  ScreenColor: 0,
  ColorDirection: 1,
  ImageIndex: 0,
  SoundIndex: 0,

  Enter: function() {
    this.Zones = {
      "head0": {
        'type': 'head',
        "X": "0",
        "Y": "0",
        "Width": 96,
        "Height": 87,
        "ColliderPoint": {
          "top": {
            X: 0,
            Y: 42
          }
        }
      },
      "head1": {
        'type': 'head',
        "X": "96",
        "Y": "0",
        "Width": 85,
        "Height": 104,
        "ColliderPoint": {
          "top": {
            X: 0,
            Y: 35
          }
        }
      },
      "head2": {
        'type': 'head',
        "X": "186",
        "Y": "0",
        "Width": 86,
        "Height": 91,
        "ColliderPoint": {
          "top": {
            X: 0,
            Y: 43
          }
        }
      },
      // "leg0": {
      //   "X": "0",
      //   "Y": "192",
      //   "Width": 96,
      //   "Height": 78
      // },
      // "leg1": {
      //   "X": "96",
      //   "Y": "172",
      //   "Width": 90,
      //   "Height": 78
      // },
      // "leg2": {
      //   "X": "186",
      //   "Y": "178",
      //   "Width": 100,
      //   "Height": 78
      // },
    };

    this.ZoneBodies = {
      "body0": {
        "X": "0",
        "Y": "96",
        "Width": 44,
        "Height": 69
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
    Enjine.Resources.AddZonesBodies(this.ZoneBodies);
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
