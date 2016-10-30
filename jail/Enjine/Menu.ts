/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Menu {
  public isOpen: boolean = false;
  public canClose: boolean = false;
  public canOpen: boolean = true;
  constructor(public button: SpriteClickable) {
  }

  public Update():void {
    if (this.button.ClickIn() && !this.isOpen && this.canOpen) {
      this.isOpen = true;
      this.canOpen = false;
      setTimeout(() => { this.canClose = true; }, 100)
    }

    if (this.button.ClickIn() && this.isOpen && this.canClose) {
      this.isOpen = false;
      this.canClose = false;
      setTimeout(() => { this.canOpen = true; }, 100)
    }
  }

  public DrawRect(context: any):void {
    context.translate(global.size.width / 2 - 150, global.size.height / 2 - 200);
    context.fillRect(0, 0, 300, 400);
  }

  public Draw(context: any):void {
    context.save();
    console.log(this.isOpen);
    if (this.isOpen) {
      this.DrawRect(context);
    }
    context.restore();
  }


  public Clear():void {
  }
}
