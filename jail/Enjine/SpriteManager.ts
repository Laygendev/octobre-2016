/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteManager {
  listSprite: any = {"staticImage": [], "body": [], "head": [], "leg": [], "arml": [], "armr": [], "button": []};
  constructor() {}

  protected Init():void {

  }

  public Update():string {
    for (var type in this.listSprite) {
      for (var key in this.listSprite[type]) {
        this.listSprite[type][key].Update();

				if (this.listSprite[type][key].ClickIn && this.listSprite[type][key].ClickIn()) {
          let keyElement: any = this.listSprite[type][key];
          this.Remove(this.listSprite[type][key]);
					return keyElement.name;
				}
		  }
    }

		return undefined;
  }

  public Draw(context: any):void {
    for (var type in this.listSprite) {
      for (var key in this.listSprite[type]) {
        this.listSprite[type][key].Draw(context);
      }
    }
  }

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
}
