/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class ColliderPoint {
  public pos: any = {x: 0, y: 0};

  constructor(public localX: number, public localY: number) { }

  public Update(parentX: number, parentY: number):void {
    this.pos.x = parentX - 0.5 + this.localX;
    this.pos.y = parentY - 0.5 + this.localY;
  }

  public Draw(context: any):void {
    context.fillRect(this.pos.x, this.pos.y, 1, 1);
  }

  public Clear():void {
    delete this.pos;
  }
}
