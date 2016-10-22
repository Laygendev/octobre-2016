/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Character extends Sprite {
  private childs: Array<Sprite> = [];
  constructor(public x: number, public y:number, public zone: Array<any>) {
    super(x, y, zone);
  }

  protected Init():void {

  }

  public AddChild(child: Sprite):void {
    this.childs.push(child);
  }

  public Update():void {
    this.x = EventMouse.Mouse.move.x;
    this.y = EventMouse.Mouse.move.y;
  }

  public Draw(context: any):void {
    context.save();
    context.translate(this.x, this.y);

    for (var key in this.childs) {
      this.childs[key].Draw(context);
    }

    context.restore();
  }
}
