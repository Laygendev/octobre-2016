/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class BodyManager {
  bodies: Array<Sprite> = [];
  numberSprite: number = 0;
  constructor() {}

  public Update(deltaTime: number):void {
    for (var key in this.bodies) {
      this.bodies[key].Update(deltaTime);
    }
  }

  public Draw(context: any):void {
    for (var key in this.bodies) {
      this.bodies[key].Draw(context);
    }
  }

  /**
   * Ajoutes un sprites dans le tableau listSprite
   * @param {Sprite} sprite Le sprite a ajouter
   */
  Add(sprite: Sprite): void {
		if (sprite) {
	    this.bodies.push(sprite);
		}
  }

  Remove(sprite: Sprite): void {
    for (var key in this.bodies) {
      if (this.bodies[key] == sprite) {
        let aKey: any = key;
        sprite.Clear();
        this.bodies.splice(aKey, 1);
      }
    }
  }

  Clear():void {}
}
