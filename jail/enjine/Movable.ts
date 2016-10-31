/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Movable {
  constructor(public speed: number, public speedAngle: number) {}

  public Update(pos:any, angle: number):any {
    pos.x = pos.x + this.speed * Math.cos(angle);
    pos.y = pos.y + this.speed * Math.sin(angle);

    angle += this.speedAngle;

    return {
      pos: pos,
      angle: angle
    };
  }

  public Clear():void {

  }
}
