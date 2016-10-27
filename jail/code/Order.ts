/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Order {
  done: Boolean = false;
  character: Character = undefined;

  constructor(public spawnedTime: Number, public listSprite: Array<Sprite>) {
    console.log(this.listSprite);
  }


  public Draw(context: any):void {
    for(var key in this.listSprite) {
      Helper.DrawImage.Draw(this.listSprite[key]);
    }
  }

  public Clear():void {
  }

  public SetCharacter(character: Character):void {
    this.character = character;
  }
}
