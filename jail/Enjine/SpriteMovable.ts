/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteMovable extends Sprite {
  private timeOut: number = 2000;
  private inScreen: boolean = false;
  private pointsCollider: Array<PointCollider> = [];

  constructor(public image: any,
              public name: string,
              public type: string,
              public pos: any,
              public zone: any,
              public speed: number,
              public angle: number,
              public speedAngle: number) {
    super(image, name, type, zone);

     setTimeout(() => { this.inScreen = true; }, this.timeOut);
  }

  public Update():void {
    this.pos.x = this.pos.x + this.speed * Math.cos(this.angle);
    this.pos.y = this.pos.y + this.speed * Math.sin(this.angle);
    this.angle += this.speedAngle;

    if (this.inScreen && (this.pos.x < -50 || this.pos.x > global.size.width + 50 || this.pos.y < -50 || this.pos.y > global.size.height + 50) ) {
      if (this.spriteManager) {
        this.spriteManager.Remove(this);
      }
      this.Clear();
    }


    for (var key in this.pointsCollider) {
      this.pointsCollider[key].Update(this.pos, this.angle);
    }
  }

  public Draw(context: any):void {
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.rotate(this.angle);

    context.drawImage(this.image,
                      this.zone.x,
                      this.zone.y,
                      this.zone.width,
                      this.zone.height,
                      -(this.zone.width / 2) + this.offset.x,
                      -(this.zone.height / 2) + this.offset.y,
                      this.zone.width,
                      this.zone.height);

      context.restore();

      for (var key in this.pointsCollider) {
        this.pointsCollider[key].Draw(context);
      }
  }

  public Clear():void {

  }
}
