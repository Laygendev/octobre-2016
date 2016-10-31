/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class PointCollider {
  public pos: any = {x: 0, y: 0};
  public angle: number = 0;

  constructor(public localX: number, public localY: number) { }

  public Update(parentPos: any, parentAngle: number):void {
    this.pos.x = parentPos.x - 0.5 + this.localX;
    this.pos.y = parentPos.y - 0.5 + this.localY;

    this.angle = parentAngle * 57.3;
    this.pos = this.RotatePoint(this.pos, {x: parentPos.x, y: parentPos.y});
  }

  public RotatePoint(point:any, parentPos:any):any {
    let angle = this.angle * Math.PI / 180.0;
    return {
      x: Math.cos(angle) * (point.x - parentPos.x) - Math.sin(angle) * (point.y - parentPos.y) + parentPos.x,
      y: Math.sin(angle) * (point.x - parentPos.x) + Math.cos(angle) * (point.y - parentPos.y) + parentPos.y
    };
  }

  public Draw(context: any):void {
    context.fillRect(this.pos.x, this.pos.y, 1, 1);
  }

  public Clear():void {
    delete this.pos;
  }
}
