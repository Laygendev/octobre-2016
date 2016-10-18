/**
	Base class for all drawable objects, makes ordering automatic.
	Code by Rob Kleffner, 2011
  Modifié par Jimmy Latour, 2016
  http://labodudev.fr
  */
*/

Enjine.Drawable = function() {
    this.ZOrder = 0;
};

Enjine.Drawable.prototype = {
    Draw: function(context) { }
};
