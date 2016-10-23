/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteManager {
  listSprite: Array<any> = [];
  constructor() {}

  protected Init():void {

  }

  public Update():void {
    for (var key in this.listSprite) {
      this.listSprite[key].Update();
    }
  }

  public Draw(context: any):void {
    for (var key in this.listSprite) {
      this.listSprite[key].Draw(context);
    }
  }

  Add(sprite: Sprite): void {
    this.listSprite.push(sprite);
  }

  Remove(sprite: Sprite): void {
    for (var i = 0; i < this.listSprite.length; i++) {
      if (this.listSprite[i] == sprite) {
        this.listSprite.splice(i, 1);
      }
    }
  }
}
