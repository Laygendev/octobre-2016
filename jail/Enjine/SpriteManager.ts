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
    console.log("Update");
  }

  public Draw(context: any):void {
    for (var key in this.listSprite) {
      this.listSprite[key].Draw(context);
    }
  }

  Add(sprite: Sprite): void {
    this.listSprite.push(sprite);
  }
}
