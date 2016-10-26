/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Sprite {
  public offset: any = {x: 0, y: 0};
  public colliderPoint: Array<ColliderPoint> = [];

  constructor(public x: number, public y:number, public zone: any, public type: string) {
    this.Init();
  }

  protected Init():void {
    if (this.zone.collider) {
      for (var key in this.zone.collider) {
        this.colliderPoint[key] = new ColliderPoint(this.zone.collider[key].x, this.zone.collider[key].y);
      }
    }
  }

  protected Update():void {
    for (var key in this.colliderPoint) {
      this.colliderPoint[key].Update(this.x, this.y, 0);
    }
  }

  public Draw(context: any):void {
    context.save();
    context.translate(this.x, this.y);

    context.drawImage(Data.Ressources.spriteSheet,
      this.zone.x,
      this.zone.y,
      this.zone.width,
      this.zone.height,
      -(this.zone.width / 2) + this.offset.x,
      -(this.zone.height / 2) + this.offset.y,
      this.zone.width,
      this.zone.height);

      context.restore();

      for (var key in this.colliderPoint) {
        this.colliderPoint[key].Draw(context);
      }
  }

  public Clear():void {
    // this.colliderPoint.Clear();
    delete this.offset;
    delete this.zone;
  }

  public SetPos(x: number, y: number):void {
    this.x = x;
    this.y = y;
  }

  public SetOffset(offset: any):void {
    this.offset = offset;
  }
}
