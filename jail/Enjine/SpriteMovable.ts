/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteMovable extends Sprite {

  constructor(public x: number, public y:number, public zone: any, zoneType: any, public speed: number, public angle: number, public speedAngle: number, public name: string) {
    super(x, y, zone, zoneType, name);
  }

  public Update():void {
    this.x = this.x + this.speed * Math.cos(this.angle);
    this.y = this.y + this.speed * Math.sin(this.angle);
    this.angle += this.speedAngle;


    for (var key in this.colliderPoint) {
      this.colliderPoint[key].Update(this.x, this.y, this.angle);
    }
  }

  public Draw(context: any):void {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);

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
}
