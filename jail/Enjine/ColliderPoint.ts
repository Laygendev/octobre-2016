/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class ColliderPoint {
  public pos: any = {x: 0, y: 0};
  public angle: number = 0;
  public speedAngle: number = 0.5728;

  constructor(public localX: number, public localY: number) { }

  public Update(parentX: number, parentY: number, parentAngle: number):void {
    this.pos.x = parentX - 0.5 + this.localX;
    this.pos.y = parentY - 0.5 + this.localY;

    this.angle = parentAngle * 57.3;
    this.pos = this.RotatePoint(this.pos, {x: parentX, y: parentY});
  }

  public RotatePoint(point:any, parent:any):any {
    let angle = this.angle * Math.PI / 180.0;
    return {
      x: Math.cos(angle) * (point.x - parent.x) - Math.sin(angle) * (point.y - parent.y) + parent.x,
      y: Math.sin(angle) * (point.x - parent.x) + Math.cos(angle) * (point.y - parent.y) + parent.y
    };
  }

  public Draw(context: any):void {
    context.fillRect(this.pos.x, this.pos.y, 1, 1);
  }

  public Clear():void {
    delete this.pos;
  }
}
