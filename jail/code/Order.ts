/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Order {
  public done: Boolean = false;
  public character: Character = undefined;
  private pos: any = {x: 0, y: 0};

  constructor(public listHumanPartKey: Array<string>) {
    this.pos = Helper.Order.RandomPosOrder()
  }

  public Draw(context: any):void {
    context.save();
    if (this.done) {
      context.globalAlpha = 1;
    }

    context.translate(this.pos.x, this.pos.y);

    for(var key in this.listHumanPartKey) {
      Helper.DrawImage.Draw(this.listHumanPartKey[key], context);
    }
    context.restore();
  }

  public Clear():void {
    delete this.listHumanPartKey;
  }

  public SetCharacter(character: Character):void {
    this.done = true;
    this.character = character;
  }
}
