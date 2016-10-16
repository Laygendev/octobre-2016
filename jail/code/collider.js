Game.Collider = function(Rect) {
  this.Rect = Rect;
};

Game.Collider.prototype.MouseIn = function() {
  var i = 0;
  for (i = 0; i < nbp; i++) {

  }
  // int i;
  // for(i=0;i<nbp;i++)
  // {
  //    Point A = tab[i];
  //    Point B;
  //    if (i==nbp-1)  // si c'est le dernier point, on relie au premier
  //        B = tab[0];
  //    else           // sinon on relie au suivant.
  //        B = tab[i+1];
  //    Vecteur D,T;
  //    D.x = B.x - A.x;
  //    D.y = B.y - A.y;
  //    T.x = P.x - A.x;
  //    T.y = P.y - A.y;
  //    float d = D.x*T.y - D.y*T.x;
  //    if (d<0)
  //       return false;  // un point à droite et on arrête tout.
  // }
  // return true;  // si on sort du for, c'est qu'aucun point n'est à gauche, donc c'est bon.
  //
	// if (Enjine.Mouse.X > this.Rect.X - this.Offset.X - (this.Rect.W/2) && Enjine.Mouse.X < this.Rect.X - this.Offset.X + (this.Rect.W/2) &&
	// 	Enjine.Mouse.Y > this.Rect.Y - this.Offset.Y - (this.Rect.H/2) && Enjine.Mouse.Y < this.Rect.Y - this.Offset.Y + (this.Rect.H/2)) {
	// 	console.log('in');
	// }
	// else {
	// }
};
