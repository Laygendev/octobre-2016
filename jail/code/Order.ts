/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Order {
  done: Boolean = false;
  character: Character = undefined;

  constructor(public spawnedTime: Number, public listSprite: Array<string>) {}


  public Draw(context: any):void {
		context.save();
		context.scale(0.7, 0.7);
		let i = 0;
    for(var key in this.listSprite) {
      Helper.DrawImage.Draw(this.listSprite[key], context, 1 * (100 * i), 0);
			i++;
    }
		context.restore();
  }

  public Clear():void {
  }

  public SetCharacter(character: Character):void {
    this.character = character;
  }
}
