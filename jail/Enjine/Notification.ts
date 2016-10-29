/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Notification {
  private maxWidth: number = 300;
  private lineHeight: number = 10;

  constructor(public text: string, public pos: any, public size: any) {
    this.maxWidth = this.size.width;
  }

  public Draw(context: any):void {
    context.save();
    context.fillStyle = "white";
    context.translate(this.pos.x, this.pos.y);
    context.fillRect(0, 0, this.size.width, this.size.height);
    context.fillStyle = "black";
    context.font = "14px Source Sans Pro Bold";
    context.fillText(this.text, this.pos.x, this.pos.y);
    context.restore();
  }

  public Update():void {

  }

  public ClickIn():void {

  }

  public Clear():void {

  }
}
