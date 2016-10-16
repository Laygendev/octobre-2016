/**
Simple demo of the engine.
Code by Rob Kleffner, 2011
*/

Enjine.Shape = {
  DrawRect: function(context, Rect) {
    context.save();
    context.fillRect(Rect.X, Rect.Y, Rect.W, Rect.H);
    context.restore();
  }
};
