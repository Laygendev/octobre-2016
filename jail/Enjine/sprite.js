/**
Represents a simple static sprite.
Code by Rob Kleffner, 2011
*/

Enjine.Sprite = function(name, manager, element, zone) {
	this.Name = name;
	this.Manager = manager;
	this.Image = element;
	this.Zone = zone;

	this.X = 0;
	this.Y = 0;
	this.size = {
		width: 0,
		height: 0,
	};

	this.Offset = {
		X: 0,
		Y: 0
	};

	this.Angle = 0;
	this.SpeedAngle = 0.5;
};

Enjine.Sprite.prototype = new Enjine.Drawable();

Enjine.Sprite.prototype.SetPos = function(pos) {
	if (pos.X) {
		this.X = pos.X;
	}

	if (pos.Y) {
		this.Y = pos.Y;
	}
}

Enjine.Sprite.prototype.SetOffset = function(Offset) {
	this.Offset = Offset;
}

Enjine.Sprite.prototype.Update = function(delta) {
	this.MouseIn();
	this.ClickIn();
}

Enjine.Sprite.prototype.MouseIn = function() {
	if (Enjine.Mouse.X > this.X && Enjine.Mouse.X < this.X + this.Zone.Width &&
		Enjine.Mouse.Y > this.Y && Enjine.Mouse.Y < this.Y + this.Zone.Height) {
		this.SpeedAngle = 2;
	}
	else {
		this.SpeedAngle = 0.02;
	}
};

Enjine.Sprite.prototype.ClickIn = function() {
	if (Enjine.Mouse.IsClicked &&
		Enjine.Mouse.ClickX > this.X && Enjine.Mouse.ClickX < this.X + this.Zone.Width &&
		Enjine.Mouse.ClickY > this.Y && Enjine.Mouse.ClickY < this.Y + this.Zone.Height) {
		Game.BodySelectState.Exit(this.Name);
	}
};

Enjine.Sprite.prototype.Draw = function(context) {
	context.save();
	context.translate(this.X + this.Zone.Width / 2, this.Y + this.Zone.Height / 2); //let's translate
	context.rotate(this.Angle += this.SpeedAngle); //increment the angle and rotate the image
	context.drawImage(this.Image,
										this.Zone.X,
										this.Zone.Y,
										this.Zone.Width,
										this.Zone.Height,
										-(this.Zone.Width/2),
										-(this.Zone.Height/2),
										this.Zone.Width,
										this.Zone.Height);
	context.restore();
};
