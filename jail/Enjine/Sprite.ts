/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Sprite {
  public offset: any = {x: 0, y: 0};
  public colliderPoint: ColliderPoint = undefined;

  constructor(public x: number, public y:number, public zone: any) {
    this.Init();
  }

  protected Init():void {
    if (this.zone.collider) {
      console.log(this.zone);
      this.colliderPoint = new ColliderPoint(this.zone.collider.top.x, this.zone.collider.top.y);
    }
  }

  protected Update():void {
    this.colliderPoint.Update(this.x, this.y);
  }

  public Draw(context: any):void {
    context.save();
    context.translate(this.x, this.y);

    context.drawImage(Data.Ressources.spriteSheet,
      this.zone.x,
      this.zone.y,
      this.zone.width,
      this.zone.height,
      -(this.zone.width / 2),
      -(this.zone.height / 2),
      this.zone.width,
      this.zone.height);

      context.restore();

      if (this.colliderPoint) {
        this.colliderPoint.Draw(context);
      }
  }

  public Clear():void {
    this.colliderPoint.Clear();
    delete this.offset;
    delete this.zone;
  }

  public SetOffset(offset: any):void {
    this.offset = offset;
  }
}
