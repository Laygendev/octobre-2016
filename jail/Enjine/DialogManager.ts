/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class DialogManager {
  private currentKeyDialog: number = 0;
  private dialogs: Array<Dialog>= [];
  private mouseSprite: SpriteClickable = undefined;

  constructor(private scene: Scene) {
    this.mouseSprite = new SpriteClickable(Data.Ressources.staticImage['mouse'], 0, 0, {width: 0, height: 0}, "staticImage", "mouse");
    global.canvas.addEventListener('mousedown', (event: Event) => { this.MouseDown(event); }, false);
  }

  MouseDown(event: Event):void {
    // A rectifier
    if (this.dialogs) {
      if (this.dialogs[this.currentKeyDialog].done) {
        this.NextDialog();
      }
      else {
        if (this.dialogs[this.currentKeyDialog].currentChar > 4) {
          this.dialogs[this.currentKeyDialog].CompleteDialog();
        }
      }
    }
  }

  public Load(pathJson: string):void {
    Data.JSONLoader.Exec(pathJson, (data: Array<any>) => {
      for (var i = 0; i < data.dialog.length; i++) {
        this.AddDialog(new Dialog(data.dialog[i], 50, {x: 0, y:0}));
      }
    });
  }

  public AddDialog(dialog: Dialog) {
    this.dialogs.push(dialog);
  }

  private Update():void {

  }

  public Draw(context: any):void {
    context.save();
    context.fillStyle = "white";
    if (this.dialogs[this.currentKeyDialog]) {
      context.translate(global.size.width / 2 - 250, global.size.height / 2 - 150);
      context.fillRect(0, 0, 500, 300);
      this.mouseSprite.Draw(context);
      this.mouseSprite.SetPos(450, 250);
      context.translate(20, 50);
      this.dialogs[this.currentKeyDialog].Draw(context);
    }
    context.restore();
  }

  public NextDialog():void {
    this.currentKeyDialog++;


    if (this.currentKeyDialog >= this.dialogs.length) {
      this.Clear();
    }
    else {
      this.dialogs[this.currentKeyDialog].currentChar = 0;
      this.dialogs[this.currentKeyDialog].currentText = "";
      this.dialogs[this.currentKeyDialog].done = false;
    }
  }

  public Clear():void {
    delete this.currentKeyDialog;
    for (var key in this.dialogs) {
      this.dialogs[key].Clear();
    }

    global.canvas.removeEventListener('mousedown', (event: Event) => { this.MouseDown(event); }, false);

    delete this.dialogs;

    this.mouseSprite.Clear();
    delete this.mouseSprite;

    this.scene.Start();
  }
}
