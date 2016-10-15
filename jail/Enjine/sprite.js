/**
Represents a simple static sprite.
Code by Rob Kleffner, 2011
*/

Enjine.Sprite = function() {
	this.X = 0;
	this.Y = 0;
	this.size = {
		width: 0,
		height: 0,
	}
	this.Image = null;
};

Enjine.Sprite.prototype = new Enjine.Drawable();

Enjine.Sprite.prototype.Draw = function(context) {
	context.drawImage(this.Image, this.X, this.Y);
};
