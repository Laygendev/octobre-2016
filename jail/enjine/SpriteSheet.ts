/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteSheet extends Sprite {
  constructor(public name: string,
              public type: string,
              public pos: any,
              public zone: any) {

    super(name, type, pos, zone);
  }

  protected Update():void {
    // for (var key in this.colliderPoint) {
    //   this.colliderPoint[key].Update(this.x, this.y, 0);
    // }
  }

  public Draw(context: any):void {
    // context.save();
    // context.translate(this.x, this.y);
    // context.scale(this.scale.x, this.scale.y);
    // context.drawImage(Data.Ressources.spriteSheet,
    //   this.zone.x,
    //   this.zone.y,
    //   this.zone.width,
    //   this.zone.height,
    //   -(this.zone.width / 2) + this.offset.x,
    //   -(this.zone.height / 2) + this.offset.y,
    //   this.zone.width,
    //   this.zone.height);
    //
    //   context.restore();
    //
    //   for (var key in this.colliderPoint) {
    //     this.colliderPoint[key].Draw(context);
    //   }
  }

  public Clear():void {}
}
