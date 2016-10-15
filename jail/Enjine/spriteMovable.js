/**
Represents a simple static sprite.
Code by Jimmy Latour, 2016
*/

Enjine.SpriteMovable = function(resource) {
	this.X = 0;
	this.Y = 0;
	this.Speed = 10;
	this.Angle = 0.02;
	this.SpeedAngle = 0.1;
	this.Rotation = 0;
	this.SpeedRotation = 0.1;
	this.Image = resource.Image;
	this.Size = resource.Size;
};

Enjine.SpriteMovable.prototype = new Enjine.Drawable();

Enjine.SpriteMovable.prototype.Update = function(delta) {
	this.X = this.X + this.Speed * Math.cos(this.Angle) * delta;
	this.Y = this.Y + this.Speed * Math.sin(this.Angle) * delta;
	this.Angle += this.SpeedAngle * delta;
};

Enjine.SpriteMovable.prototype.Draw = function(context) {
  // ctx.translate( this.X +width/2, this.Y +height/2 );
  // ctx.rotate(degrees*Math.PI/180);

	context.drawImage(this.Image, this.X, this.Y);
};
