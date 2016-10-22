/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Sprite {
  public offset: any = {x: 0, y: 0};

  constructor(public x: number, public y:number, public zone: any) {
    this.Init();
  }

  protected Init():void {

  }

  protected Update():void {
    console.log("Update");
  }

  public Draw(context: any):void {
    context.save();
    context.translate(this.x + this.zone.width / 2, this.y + this.zone.height / 2);
    context.drawImage(Data.Ressources.spriteSheet,
      this.zone.x,
      this.zone.y,
      this.zone.width,
      this.zone.height,
      -((this.zone.width) + this.offset.x),
      -((this.zone.height) + this.offset.y),
      this.zone.width,
      this.zone.height);

      context.restore();
  }

  public SetOffset(offset: any):void {
    this.offset = offset;
  }
}
