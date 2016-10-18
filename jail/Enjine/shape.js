/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

Enjine.Shape = {
  DrawRect: function(context, Rect) {
    context.save();
    context.fillRect(Rect.X, Rect.Y, Rect.W, Rect.H);
    context.restore();
  }
};
