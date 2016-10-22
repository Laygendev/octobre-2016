/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteMovable extends Sprite {

  constructor(public x: number, public y:number, public zone: any) {
    super(x, y, zone);
  }

  protected Update():void {
    console.log("Update");
  }
}
