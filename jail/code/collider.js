/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

Game.Collider = function(Parent, Rect) {
	this.Parent = Parent;
  this.Rect = Rect;
	this.Pos = {
		X: 40,
		Y: 20
	}
	this.PosPoint = [
		{
			X: 0,
			Y: 0
		},
		{
			X: 0,
			Y: 0
		},
		{
			X: 0,
			Y: 0
		},
		{
			X: 0,
			Y: 0
		}
	];

	this.Angle = 0;
	this.SpeedAngle = 0;
};

Game.Collider.prototype.UpdatePos = function() {
	this.PosPoint[0].X = this.Parent.X + this.Rect[0].X;
	this.PosPoint[0].Y = this.Parent.Y + this.Rect[0].Y;

	this.PosPoint[1].X = this.Parent.X + this.Rect[1].X;
	this.PosPoint[1].Y = this.Parent.Y + this.Rect[1].Y;

	this.PosPoint[2].X = this.Parent.X + this.Rect[2].X;
	this.PosPoint[2].Y = this.Parent.Y + this.Rect[2].Y;

	this.PosPoint[3].X = this.Parent.X + this.Rect[3].X;
	this.PosPoint[3].Y = this.Parent.Y + this.Rect[3].Y;
}

Game.Collider.prototype.Rotate = function() {
	for(var i = 0; i < 4; i++) {
		var A = this.PosPoint[i];

		this.Pos.X = this.Parent.X;
		this.Pos.Y = this.Parent.Y;
		this.PosPoint[i] = this.RotatePoint(A, this.Pos, this.Parent.Angle * 57.28);
	}
};

Game.Collider.prototype.RotatePoint = function(P, O, angle) {
	angle = angle * Math.PI / 180.0;
	return {
			X: Math.cos(angle) * (P.X-O.X) - Math.sin(angle) * (P.Y-O.Y) + O.X,
			Y: Math.sin(angle) * (P.X-O.X) + Math.cos(angle) * (P.Y-O.Y) + O.Y
	};
};

Game.Collider.prototype.OnEnter = function(otherColliders) {
	var collider = true;
	for(var i = 0; i < 4; i++) {
		var A = this.PosPoint[i];
		var nextI = i;
		nextI++;
		if (nextI >= 4) {
			nextI = 0;
		}
		var B = this.PosPoint[nextI];
		var D = {X: 0, Y: 0};
		var T = {X: 0, Y: 0};

		D.X = B.X - A.X;
		D.Y = B.Y - A.Y;
		for(var x = 0; x < 4; x++) {
			T.X = otherColliders[0].PosPoint[x].X - A.X;
			T.Y = otherColliders[0].PosPoint[x].Y - A.Y;
			var d = D.X*T.Y - D.Y*T.X;
			if (d < 0) {
				collider = false;
			}
		}

		if (!collider) {
			break;
		}
	}

	if (collider) {
		this.Parent.AddChild(otherColliders[0].Parent);
		otherColliders[0].Parent.Hide = true;
		otherColliders[0].Parent.SetOffset({X: 0, Y: 68});
		otherColliders[0].Parent.RemoveCollider();
	}
};

Game.Collider.prototype.Draw = function(context) {
	context.beginPath();

	for(var i = 0; i < 4; i++) {
		var A = this.PosPoint[i];
		var nextI = i;
		nextI++;
		if (nextI >= 4) {
			nextI = 0;
		}
		var B = this.PosPoint[nextI];
		context.moveTo(A.X,A.Y);
		context.lineTo(B.X,B.Y);
  }

	context.stroke();
};
