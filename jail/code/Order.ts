/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Order {
  done: Boolean = false;
  character: Character = undefined;

  constructor(public spawnedTime: Number, public listSprite: Array<string>, public pos: any) {  }

  public Draw(context: any):void {
    context.save();
    if (this.done) {
      context.globalAlpha = 1;
    }
    context.translate(this.pos.x, this.pos.y);
    for(var key in this.listSprite) {
      Helper.DrawImage.Draw(this.listSprite[key], context);
    }
    context.restore();
  }

  public Clear():void {
    delete this.listSprite;
  }

  public SetCharacter(character: Character):void {
    this.character = character;
  }
}
