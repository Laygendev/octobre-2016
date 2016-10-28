/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Order {
  done: Boolean = false;
  character: Character = undefined;

  constructor(public spawnedTime: Number, public listSprite: Array<string>) {}

  public Draw(context: any):void {
    for(var key in this.listSprite) {
      Helper.DrawImage.Draw(this.listSprite[key], context);
    }
  }

  public Clear():void {
    delete this.listSprite;
  }

  public SetCharacter(character: Character):void {
    this.character = character;
  }
}
