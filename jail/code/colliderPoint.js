/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

Game.ColliderPoint = function(Key, Parent, Point) {
	this.Key = Key;
	this.Parent = Parent;
	this.Point = {X: 0, Y: 0};
	this.Pos = Point;
	this.SpeedAngle = 0;
};

Game.ColliderPoint.prototype.UpdatePos = function() {
	this.Point.X = this.Parent.X - 0.5 + this.Pos.X;
	this.Point.Y = this.Parent.Y - 0.5 + this.Pos.Y;
};

Game.ColliderPoint.prototype.Draw = function(context) {
	context.fillRect(this.Point.X, this.Point.Y, 1, 1);
};
