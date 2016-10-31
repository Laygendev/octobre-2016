/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteManager {
  public listSprite: any = {"body": [], "head": [], "leg": [], "arml": [], "armr": [], "buttons": [], "staticImage": [], "clickableImage": []};
  constructor() {}

  public Update(deltaTime: number):void {
    for (var type in this.listSprite) {
      for (var key in this.listSprite[type]) {
        this.listSprite[type][key].Update(deltaTime);
      }
    }
  }

  public Draw(context: any):void {
    for (var type in this.listSprite) {
      for (var key in this.listSprite[type]) {
        this.listSprite[type][key].Draw(context);
      }
    }
  }

  /**
   * Ajoutes un sprites dans le tableau listSprite
   * @param {Sprite} sprite Le sprite a ajouter
   */
  Add(sprite: Sprite): void {
		if (sprite) {
	    this.listSprite[sprite.type].push(sprite);
		}
  }

  Remove(sprite: Sprite): void {
    for (var type in this.listSprite) {
      for (var i = 0; i < this.listSprite[type].length; i++) {
        if (this.listSprite[type][i] == sprite) {
          this.listSprite[type].splice(i, 1);
        }
      }
    }
  }

  Clear():void {

  }

  Resize():void {
    for (var i = 0; i < this.listSprite["body"].length; i++) {
        this.listSprite["body"][i].Resize();
    }
  }
}
