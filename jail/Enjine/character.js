/**
Represents a simple static sprite.
Code by Rob Kleffner, 2011
*/

Enjine.Character = function(manager, element, zone) {
	this.Manager = manager;
	this.Image = element;
	this.Zone = zone;

	this.X = 0;
	this.Y = 0;
	this.size = {
		width: 0,
		height: 0,
	};
	this.Angle = 0;

  this.Childs = [];
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
  console.log(obj);
  this.Childs.push(obj);
}

Enjine.Character.prototype.Update = function(delta) {
  // Follow mouse
  this.X = Enjine.Mouse.X;
  this.Y = Enjine.Mouse.Y;

  this.UpdateChild();
}

Enjine.Character.prototype.UpdateChild = function () {
  for (var key in this.Childs) {
    this.Childs[key].SetPos({
      X: this.X + this.Childs[key].Offset.X,
      Y: this.Y + this.Childs[key].Offset.Y
    });
  }
}

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
