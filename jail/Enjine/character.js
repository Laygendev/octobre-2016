/**
Represents a simple static sprite.
Code by Rob Kleffner, 2011
Modifié par Jimmy Latour, 2016
http://labodudev.fr
*/

Enjine.Character = function(manager, element, zone) {
	this.Manager = manager;
	this.Image = element;
	this.Zone = zone;
	this.Type = 'body';
	this.X = 200;
	this.Y = 200;
	this.size = {
		width: 0,
		height: 0,
	};
	this.Offset = {
		X: 0,
		Y: 0
	}
	this.Angle = 0;
	this.SpeedAngle = 0.1;

  this.Childs = {'head': undefined, 'body': this, 'leg': undefined};
  this.Colliders = [];
	this.AddCollider(new Game.Collider("top", this, [
		{
			X: -20,
			Y: -40
		},
		{
			X: 20,
			Y: -40
		},
		{
			X: 20,
			Y: -20
		},
		{
			X: -20,
			Y: -20
		}
	]));

	this.AddCollider(new Game.Collider("bottom", this, [
		{
			X: -20,
			Y: 40
		},
		{
			X: 20,
			Y: 40
		},
		{
			X: 20,
			Y: 60
		},
		{
			X: -20,
			Y: 60
		}
	]));
};

Enjine.Character.prototype = new Enjine.Drawable();

Enjine.Character.prototype.SetPos = function(pos) {
	if (pos.X) {
		this.X = pos.X;
	}

	if (pos.Y) {
		this.Y = pos.Y;
	}
}

Enjine.Character.prototype.AddChild = function(key, obj, collider, contactPoint) {
	obj.Hide = true;
	var offset = {
		X: 0,
		Y: 0
	};

	offset.Y = contactPoint.Y;
	offset.X = contactPoint.X;

	obj.SetOffset(offset);
	obj.RemoveCollider();
	this.RemoveColliderKey(collider.Key);
  this.Childs[obj.Type] = obj;
}

Enjine.Character.prototype.AddCollider = function(obj) {
  this.Colliders.push(obj);
}

Enjine.Character.prototype.RemoveColliderKey = function(key) {
	for (var i in this.Colliders) {
		if (this.Colliders[i].Key == key) {
			this.Colliders.splice(i, 1);
		}
	}
}

Enjine.Character.prototype.Update = function(delta) {
  // Follow mouse
  this.X = Enjine.Mouse.X;
  this.Y = Enjine.Mouse.Y;

	// Update rotation
	if (Enjine.KeyboardInput.IsKeyDown(Enjine.Keys.Left)) {
		this.Angle -= this.SpeedAngle;
	}
	if (Enjine.KeyboardInput.IsKeyDown(Enjine.Keys.Right)) {
		this.Angle += this.SpeedAngle;
	}

  this.UpdateChild();
	this.UpdateCollider();
}

Enjine.Character.prototype.UpdateChild = function () {
  // for (var key in this.Childs) {
  //   this.Childs[key].SetPos({
  //     X: this.X + this.Childs[key].Offset.X,
  //     Y: this.Y + this.Childs[key].Offset.Y
  //   });
  // }
}

Enjine.Character.prototype.UpdateCollider = function () {
	for (var key in this.Colliders) {
		this.Colliders[key].UpdatePos();
		this.Colliders[key].Rotate();
		this.Colliders[key].CheckCollider(this.Manager.Objects);
	}
};

Enjine.Character.prototype.Draw = function(context) {
	context.save();
	context.translate(this.X, this.Y); //let's translate
	context.rotate(this.Angle); //increment the angle and rotate the image
	// context.drawImage(this.Image,
	// 									this.Zone.X,
	// 									this.Zone.Y,
	// 									this.Zone.Width,
	// 									this.Zone.Height,
	// 									-(this.Zone.Width/2),
	// 									-(this.Zone.Height/2),
	// 									this.Zone.Width,
	// 									this.Zone.Height);

	this.DrawChild(context);
	for (var key in this.Colliders) {
		this.Colliders[key].Draw(context);
	}
};

Enjine.Character.prototype.DrawChild = function(context) {
  for (var key in this.Childs) {
			if (this.Childs[key]) {
	  	context.drawImage(this.Image,
	                      this.Childs[key].Zone.X,
	                      this.Childs[key].Zone.Y,
	                      this.Childs[key].Zone.Width,
	                      this.Childs[key].Zone.Height,
	                      -((this.Childs[key].Zone.Width/2) + this.Childs[key].Offset.X),
	                      -((this.Childs[key].Zone.Height/2) + this.Childs[key].Offset.Y),
	                      this.Childs[key].Zone.Width,
	                      this.Childs[key].Zone.Height);
	  }
	}
	context.restore();
};
