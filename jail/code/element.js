/**
Code par Jimmy Latour, 2016
http://labodudev.fr
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
	this.Hide = false;
	this.Speed = 100;
	this.Angle = 0;
	this.SpeedAngle = 0.1;
	this.Rotation = 0;
	this.SpeedRotation = 0.1;
	this.Image = element;
	this.Zone = zone;
	this.randomPosition = 0;
	this.inScreen = false;
	this.outScreen = false;
	this.Child = {};
	this.Colliders = [];
	this.AddCollider(new Game.Collider(this, [
		{
			X: -5,
			Y: 45
		},
		{
			X: 5,
			Y: 45
		},
		{
			X: 5,
			Y: 50
		},
		{
			X: -5,
			Y: 50
		}
	]));

	this.Enter();
};

Game.Element.prototype = new Enjine.Drawable();

Game.Element.prototype.Enter = function() {
	// var RANDOM_POSITION_SIDE = {
  //   0: "TOP", // Negative X
  //   1: "LEFT", // Negative Y
  //   2: "RIGHT", // Positive X
  //   3: "DOWN" // Positive Y
  // };
	//
	// this.randomPosition = Math.floor((Math.random() * 3) + 0);
	//
	// if (RANDOM_POSITION_SIDE[this.randomPosition] == "TOP") {
	// 	this.X = Math.floor((Math.random() * (Enjine.GameCanvas.Canvas.width - 50)) + 50);
	// 	this.Y = 0 - Math.floor((Math.random() * 200) + 50);
	// }
	// else if (RANDOM_POSITION_SIDE[this.randomPosition] == "LEFT") {
	// 	this.X = 0 - Math.floor((Math.random() * 200) + 50);
	// 	this.Y = Math.floor((Math.random() * (Enjine.GameCanvas.Canvas.height - 50)) + 50);
	// }
	// else if (RANDOM_POSITION_SIDE[this.randomPosition] == "RIGHT") {
	// 	this.X = Enjine.GameCanvas.Canvas.width + Math.floor((Math.random() * 200) - 50);
	// 	this.Y = Math.floor((Math.random() * (Enjine.GameCanvas.Canvas.height - 50)) + 50);
	// }
	// else if (RANDOM_POSITION_SIDE[this.randomPosition] == "DOWN") {
	// 	this.X = Math.floor((Math.random() * (Enjine.GameCanvas.Canvas.width - 50)) + 50);
	// 	this.Y = Enjine.GameCanvas.Canvas.height + Math.floor((Math.random() * 200) - 50);
	// }
	//
	// var RANDOM_ANGLE = {
	// 	0: { // "TOP"
	// 		min: 0.8,
	// 		max: 2.5
	// 	},
	// 	1: { // "LEFT"
	// 		min: -0.6,
	// 		max: 0.6
	// 	},
	// 	2: { // "RIGHT"
	// 		min: 2.6,
	// 		max: 3.6
	// 	},
	// 	3: { // "DOWN"
	// 		min: 3.6,
	// 		max: 5.6
	// 	}
	// };
	//
	// this.Angle = (Math.random() * RANDOM_ANGLE[this.randomPosition].max) + RANDOM_ANGLE[this.randomPosition].min;
	//
	// this.Speed = (Math.random() * 300) + 50;
	//
	// this.SpeedAngle = (Math.random() * 1) + 0;
	//
	this.X = 200;
	this.Y = 200;
}

Game.Element.prototype.SetPos = function(pos) {
	if (pos.X) {
		this.X = pos.X;
	}

	if (pos.Y) {
		this.Y = pos.Y;
	}
}

Game.Element.prototype.SetOffset = function(Offset) {
	this.Offset = Offset;
}

Game.Element.prototype.AddCollider = function(obj) {
  this.Colliders.push(obj);
}

Game.Element.prototype.RemoveCollider = function() {
	this.Colliders.splice(0, this.Colliders.length);
	this.Colliders = undefined;
}

Game.Element.prototype.Update = function(delta) {
	// this.X = this.X + this.Speed * Math.cos(this.Angle) * delta;
	// this.Y = this.Y + this.Speed * Math.sin(this.Angle) * delta;
	// this.Angle += this.SpeedAngle * delta;
	//
	// this.InCanvas();
	this.UpdateCollider();
};

Game.Element.prototype.UpdateCollider = function () {
	for (var key in this.Colliders) {
		this.Colliders[key].UpdatePos();
		this.Colliders[key].Rotate();
		if ( this.Manager.Objects[0].Colliders ) {
			this.Colliders[key].OnEnter(this.Manager.Objects[0].Colliders);
		}
	}
};

Game.Element.prototype.InCanvas = function() {
	if (!this.inScreen &&
		this.X > 0 && this.X + this.Zone.Width < Enjine.GameCanvas.Canvas.width &&
		this.Y > 0 && this.Y + this.Zone.Height < Enjine.GameCanvas.Canvas.height) {
		this.inScreen = true;
	}
	else if ((this.X < 0 || this.X + this.Zone.Width > Enjine.GameCanvas.Canvas.width) ||
		this.Y < 0 || this.Y + this.Zone.Height > Enjine.GameCanvas.Canvas.height) {
		if (this.inScreen) {
			this.Exit();
		}
	}

};

Game.Element.prototype.Draw = function(context) {
	if (!this.Hide) {
		context.save();
		context.translate(this.X, this.Y); //let's translate
		context.rotate(this.Angle); //increment the angle and rotate the image
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

		// for (var key in this.Colliders) {
		// 	this.Colliders[key].Draw(context);
		// }
	}
};

Game.Element.prototype.Exit = function() {
	this.Manager.Remove(this);
};
