/**
Represents a simple static sprite.
Code by Rob Kleffner, 2011
*/

Enjine.Mouse = {
  Canvas: null,
  X: 0,
  Y: 0,
  IsClicked: false,
  ClickX: 0,
  ClickY: 0,

  Initialize: function(canvas) {
    this.Canvas = canvas;
    this.Event();
  },

  Event: function() {
    this.Canvas.addEventListener('mousemove', this.MouseMove);
    this.Canvas.addEventListener('mousedown', this.MouseDown);
    this.Canvas.addEventListener('mouseup', this.MouseUp);
  },

  MouseMove: function(event) {
    var Rect = Enjine.Mouse.Canvas.getBoundingClientRect();

    Enjine.Mouse.X = event.clientX - Rect.left;
    Enjine.Mouse.Y = event.clientY - Rect.top;
  },

  MouseDown: function(event) {
    var Rect = Enjine.Mouse.Canvas.getBoundingClientRect();

    Enjine.Mouse.ClickX = event.clientX - Rect.left;
    Enjine.Mouse.ClickY = event.clientY - Rect.top;

    Enjine.Mouse.IsClicked = true;
  },

  MouseUp: function(event) {
    Enjine.Mouse.IsClicked = false;
  }

};
