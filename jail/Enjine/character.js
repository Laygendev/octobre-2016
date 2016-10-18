/**
Represents a simple static sprite.
Code by Rob Kleffner, 2011
Modifié par Jimmy Latour, 2016
http://labodudev.fr
*/
*/

Enjine.Character = function(manager, element, zone) {
	this.Manager = manager;
	this.Image = element;
	this.Zone = zone;

	this.X = 200;
	this.Y = 200;
	this.size = {
		width: 0,
		height: 0,
	};
	this.Angle = 0;

  this.Childs = [];
  this.Colliders = [];
	this.AddCollider(new Game.Collider([
		{
			X: 170,
			Y: 170
		},
		{
			X: 230,
			Y: 170
		},
		{
			X: 230,
			Y: 190
		},
		{
			X: 170,
			Y: 190
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

Enjine.Character.prototype.AddChild = function(obj) {
  this.Childs.push(obj);
}

Enjine.Character.prototype.AddCollider = function(obj) {
  this.Colliders.push(obj);
}

Enjine.Character.prototype.Update = function(delta) {
  // Follow mouse
  this.X = Enjine.Mouse.X;
  this.Y = Enjine.Mouse.Y;

  this.UpdateChild();
	this.UpdateCollider();
}

Enjine.Character.prototype.UpdateChild = function () {
  for (var key in this.Childs) {
    this.Childs[key].SetPos({
      X: this.X + this.Childs[key].Offset.X,
      Y: this.Y + this.Childs[key].Offset.Y
    });
  }
}

Enjine.Character.prototype.UpdateCollider = function () {
	this.UpdateColliderPos();
	this.UpdateColliderRotate();
	this.UpdateCollider();
	for (var key in this.Colliders) {
		for(var i = 0; i < 4; i++) {
			var A = this.Colliders[key].Rect[i];
			this.Colliders[key].Rect[i] = this.RotatePoint(A, {X: this.X, Y: this.Y}, 0.575);
		}
	}

	for (var key in this.Colliders) {
		var mouseIn = true;
		for(var i = 0; i < 4; i++) {
			var A = this.Colliders[key].Rect[i];
			var nextI = i;
			nextI++;
			if (nextI >= 4) {
				nextI = 0;
			}
			var B = this.Colliders[key].Rect[nextI];
			var D = {X: 0, Y: 0};
			var T = {X: 0, Y: 0};

			D.X = B.X - A.X;
			D.Y = B.Y - A.Y;
			T.X = Enjine.Mouse.X - A.X;
			T.Y = Enjine.Mouse.Y - A.Y;
			var d = D.X*T.Y - D.Y*T.X;
			if (d < 0) {
				mouseIn = false;
				break;
			}
		}

		if (mouseIn) {
			console.log('ok');
		}
  }
};

Enjine.Character.prototype.RotatePoint = function(P, O, angle) {
    angle = angle * Math.PI / 180.0;
    return {
        X: Math.cos(angle) * (P.X-O.X) - Math.sin(angle) * (P.Y-O.Y) + O.X,
        Y: Math.sin(angle) * (P.X-O.X) + Math.cos(angle) * (P.Y-O.Y) + O.Y
    };
};

Enjine.Character.prototype.Draw = function(context) {
	context.save();
	context.translate(this.X, this.Y); //let's translate
	context.rotate(this.Angle += 0.01); //increment the angle and rotate the image
	context.drawImage(this.Image,
										this.Zone.X,
										this.Zone.Y,
										this.Zone.Width,
										this.Zone.Height,
										-(this.Zone.Width/2),
										-(this.Zone.Height/2),
										this.Zone.Width,
										this.Zone.Height);
  this.DrawChild(context);
	this.DrawCollider(context);
};

Enjine.Character.prototype.DrawChild = function(context) {
  for (var key in this.Childs) {
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

	context.restore();
};

Enjine.Character.prototype.DrawCollider = function(context) {
	context.beginPath();

  for (var key in this.Colliders) {
		for(var i = 0; i < 4; i++) {
			var A = this.Colliders[key].Rect[i];
			var nextI = i;
			nextI++;
			if (nextI >= 4) {
				nextI = 0;
			}
			var B = this.Colliders[key].Rect[nextI];
			context.moveTo(A.X,A.Y);
			context.lineTo(B.X,B.Y);
		}
  }
	context.stroke();
};
