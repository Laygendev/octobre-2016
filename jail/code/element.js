/**
Represents a simple static sprite.
Code by Jimmy Latour, 2016
*/

Game.Element = function(name, manager, element, zone) {
	this.Name = name;
	this.Manager = manager;
	this.X = 0;
	this.Y = 0;
	this.Offset = {
		X: 0,
		Y: 0
	};
	this.Speed = 100;
	this.Angle = 0;
	this.SpeedAngle = 0;
	this.Rotation = 0;
	this.SpeedRotation = 0.1;
	this.Image = element;
	this.Zone = zone;
	this.randomPosition = 0;
	this.inScreen = false;
	this.outScreen = false;
	this.Child = {};

	this.Enter();
};

Game.Element.prototype = new Enjine.Drawable();

Game.Element.prototype.Enter = function() {
	var RANDOM_POSITION_SIDE = {
    0: "TOP", // Negative X
    1: "LEFT", // Negative Y
    2: "RIGHT", // Positive X
    3: "DOWN" // Positive Y
  };

	this.randomPosition = Math.floor((Math.random() * 3) + 0);

	if (RANDOM_POSITION_SIDE[this.randomPosition] == "TOP") {
		this.X = Math.floor((Math.random() * (document.body.clientWidth - 50)) + 50);
		this.Y = 0 - Math.floor((Math.random() * 200) + 50);
	}
	else if (RANDOM_POSITION_SIDE[this.randomPosition] == "LEFT") {
		this.X = 0 - Math.floor((Math.random() * 200) + 50);
		this.Y = Math.floor((Math.random() * (document.body.clientHeight - 50)) + 50);
	}
	else if (RANDOM_POSITION_SIDE[this.randomPosition] == "RIGHT") {
		this.X = document.body.clientWidth + Math.floor((Math.random() * 200) - 50);
		this.Y = Math.floor((Math.random() * (document.body.clientHeight - 50)) + 50);
	}
	else if (RANDOM_POSITION_SIDE[this.randomPosition] == "DOWN") {
		this.X = Math.floor((Math.random() * (document.body.clientWidth - 50)) + 50);
		this.Y = document.body.clientHeight + Math.floor((Math.random() * 200) - 50);
	}

	var RANDOM_ANGLE = {
		0: { // "TOP"
			min: 0.8,
			max: 2.5
		},
		1: { // "LEFT"
			min: -0.6,
			max: 0.6
		},
		2: { // "RIGHT"
			min: 2.6,
			max: 3.6
		},
		3: { // "DOWN"
			min: 3.6,
			max: 5.6
		}
	};

	this.Angle = (Math.random() * RANDOM_ANGLE[this.randomPosition].max) + RANDOM_ANGLE[this.randomPosition].min;

	this.Speed = (Math.random() * 300) + 50;
}

Game.Element.prototype.Update = function(delta) {
	this.X = this.X + this.Speed * Math.cos(this.Angle) * delta;
	this.Y = this.Y + this.Speed * Math.sin(this.Angle) * delta;
	this.Angle += this.SpeedAngle;

	this.InCanvas();
};

Game.Element.prototype.InCanvas = function() {
	if (!this.inScreen &&
		this.X > 0 && this.X + this.Zone.Width < document.body.clientWidth &&
		this.Y > 0 && this.Y + this.Zone.Height < document.body.clientHeight) {
		this.inScreen = true;
	}
	else if ((this.X < 0 || this.X + this.Zone.Width > document.body.clientWidth) ||
		this.Y < 0 || this.Y + this.Zone.Height > document.body.clientHeight) {
		if (this.inScreen) {
			this.Exit();
		}
	}

};

Game.Element.prototype.Draw = function(context) {
	context.drawImage(this.Image, this.Zone.X, this.Zone.Y, this.Zone.Width, this.Zone.Height, this.X, this.Y, this.Zone.Width, this.Zone.Height);
};

Game.Element.prototype.Exit = function() {
	this.Manager.Remove(this);
};
