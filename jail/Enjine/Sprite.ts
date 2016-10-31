/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Sprite {
  public offset: any = {x: 0, y: 0};
  public spriteManager: SpriteManager = undefined;
  public scale: any = {x: 1.0, y: 1.0};
  public angle: number = 0;
  public zone: any = undefined;
  private clickable: Clickable = undefined;
  private movable: Movable = undefined;
  private collidersPoint: Array<PointCollider> = [];

  constructor(public image: any,
              public name: string,
              public type: string,
              public pos: any) {
  }

  public Update(deltaTime: number):void {
    if (this.clickable) {
      this.clickable.ClickIn(this);
    }

    if (this.movable) {
      let infos = this.movable.Update(this.pos, this.angle);
      this.pos = infos.pos;
      this.angle = infos.angle;
    }
  }

  public Draw(context: any):void {
    if (this.image != undefined) {
      if (this.zone) {
        this.DrawSpriteSheet(context);
      }
      else {
        context.drawImage(this.image, this.pos.x, this.pos.y);
      }
    }

    for (var key in this.collidersPoint) {
      this.collidersPoint[key].Update(this.pos, this.angle);
    }
  }

  public DrawSpriteSheet(context: any):void {
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.rotate(this.angle);

    context.drawImage(
      this.image,
      this.zone.x,
      this.zone.y,
      this.zone.width,
      this.zone.height,
      -(this.zone.width / 2) + this.offset.x,
      -(this.zone.height / 2) + this.offset.y,
      this.zone.width,
      this.zone.height
    );

    context.restore();
    // for (var key in this.collidersPoint) {
    //   this.collidersPoint[key].Draw(context);
    // }

  }

  public Clear():void {
    delete this.offset;
  }

  public SetPos(pos: any):void {
    this.pos = pos;
  }

  public SetZone(zone: any):void {
    this.zone = zone;
  }

  public SetClickable(size: any, offset: any, event: any):void {
    this.clickable = new Clickable(this.pos, offset, size);

    if (event) {
      this.clickable.SetClickEvent(event);
    }
  }

  public SetMovable(speed: number, speedAngle: number):void {
    this.movable = new Movable(speed, speedAngle);
  }

  public SetCollider():void {
    if (this.zone && this.zone.collider) {
      for (var key in this.zone.collider) {
        this.collidersPoint[key] = new PointCollider(this.zone.collider[key].x, this.zone.collider[key].y);
      }
    }
  }

  public SetOffset(offset:any):void {
    this.offset = offset;
  }
}
