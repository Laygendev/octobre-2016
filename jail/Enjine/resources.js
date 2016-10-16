/**
Represents a simple static sprite.
Code by Rob Kleffner, 2011
*/

Enjine.Resources = {
  Element: null,
  Zones: {},
  NumberZone: 0,

  Destroy: function() {
    delete this.Zones;
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

  GetRandomZone: function() {
    var randomZone = Math.floor((Math.random() * this.NumberZone) + 0);
    var i = 0;
    for (var key in this.Zones) {
      if (randomZone == i) {
        return this.Zones[key];
      }

      i++;
    }
  }
};
