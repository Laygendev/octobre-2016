/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Scene {
  public started: boolean = false;
  public dialogManager: DialogManager = undefined;
  public buttonLeave: SpriteClickable = undefined;
  public spriteManager: SpriteManager = new SpriteManager();
  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor() {
    this.buttonLeave = new SpriteClickable(Data.Ressources.staticImage['leave'], global.size.width - 40, 20, {width: 19, height: 19}, "clickableImage", "leave", undefined);
    this.spriteManager.Add(this.buttonLeave);
    this.dialogManager = new DialogManager(this);
  }

  public Start():void {}

  public Init():void {}

  public Update(delta: number):void {
    console.log('Update');
  }

  public Draw(context: any):void {
    this.spriteManager.Draw(context);
  }

  public UpdateNoStarted(delta: number):void {
    if (this.buttonLeave.ClickIn()) {
      window.open('', '_self', ''); window.close();
    }
  }

  public DrawNoStarted(context: any):void {
    if (this.spriteManager) {
      this.spriteManager.Draw(context);
    }

    if (this.dialogManager) {
      this.dialogManager.Draw(context);
    }
  }

  public Resize():void {}
}
