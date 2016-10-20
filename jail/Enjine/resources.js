/**
Represents a simple static sprite.
Code by Rob Kleffner, 2011
Modifié par Jimmy Latour, 2016
http://labodudev.fr
*/

Enjine.Resources = {
  Element: null,
  Zones: {},
  ZonesBodies: {},
  NumberZone: 0,

  Destroy: function() {
    delete this.Zones;
    delete this.ZonesBodies;
    return this;
  },

  //***********************/
  //Images
  AddElement: function(src) {
    var tmpImage = new Image();
    this.Element = tmpImage;
    tmpImage.src = src;
    return this;
  },

  AddZones: function(obj) {
    for (var key in obj) {
      this.NumberZone++;
    }

    this.Zones = obj;
    return this;
  },

  AddZonesBodies: function(obj) {
    this.ZonesBodies = obj;
    return this;
  },

  GetRandomZoneName: function() {
    var randomZone = Math.floor((Math.random() * this.NumberZone) + 0);
    var i = 0;
    for (var key in this.Zones) {
      if (randomZone == i) {
        return key;
      }

      i++;
    }
  }
};
