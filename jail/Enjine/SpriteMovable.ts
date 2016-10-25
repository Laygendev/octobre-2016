/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteMovable extends Sprite {

  constructor(public x: number, public y:number, public zone: any, zoneType: any, public speed: number, public angle: number, public speedAngle: number) {
    super(x, y, zone, zoneType);
  }

  public Update():void {
    this.x = this.x + this.speed * Math.cos(this.angle);
    this.y = this.y + this.speed * Math.sin(this.angle);
    this.angle += this.speedAngle;
    

    for (var key in this.colliderPoint) {
      this.colliderPoint[key].Update(this.x, this.y);
    }
  }
}
