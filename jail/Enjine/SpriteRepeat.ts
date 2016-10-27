/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteRepeat extends Sprite {

  constructor(public image: any, public x: number, public y:number, public zone: any, public repeat: string) {
    super(x, y, undefined, "staticImage");
  }

  public Update():void {
  }

  public Draw(context: any):void {
    if (this.image != undefined) {
      for (var i = this.x; i < global.size.width; i += this.zone.width) {
        context.drawImage(this.image, this.x + i, this.y);
      }
    }
  }
}
