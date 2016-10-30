/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Dialog {
  private interval: any;
  public currentText: string = "";
  public currentChar: number = 0;
  private maxWidth: number = 480;
  private lineHeight: number = 40;
  public done: boolean = false;
  public pos: any = {x: 0, y: 0};
  public sprite: SpriteClickable = undefined;

  constructor(public data: any, speedText: number) {
    this.pos.x = data.text.x;
    this.pos.y = data.text.y;

    if (data.image) {
      this.sprite = new SpriteClickable(Data.Ressources.staticImage[data.image.name], data.image.x, data.image.y, {width: 860, height: 199}, "staticImage", "terre");
    }


    this.interval = setInterval( () => { this.Update(); }, speedText );
  }

  private Update():void {
    if (this.currentChar < this.data.text.string.length) {
      this.currentText += this.data.text.string[this.currentChar];
      this.currentChar++;
    }
    else {
      this.done = true;
    }
  }

  public DrawRect(mouseSprite: SpriteClickable, context: any):void {
    context.translate(global.size.width / 2 - this.data.rect.width / 2, global.size.height / 2 - this.data.rect.height / 2);
    context.fillRect(0, 0, this.data.rect.width, this.data.rect.height);
    mouseSprite.Draw(context);
    mouseSprite.SetPos(this.data.rect.width - 50, this.data.rect.height - 50);
    context.translate(20, 50);
  }

  public Draw(mouseSprite: SpriteClickable, context: any):void {
    this.DrawRect(mouseSprite, context);

    if (this.sprite) {
      this.sprite.Draw(context);
    }

    context.fillStyle = "black";
    context.font = "26px Source Sans Pro Bold";

    if (this.data.text.backLineSpecial) {
      let words = this.currentText.split(' ');
      let line = '';
      let y = this.pos.y;

      for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > this.maxWidth && n > 0) {
          context.fillText(line, this.pos.x, y);
          line = words[n] + ' ';
          y += this.lineHeight;
        }
        else {
          line = testLine;
        }
      }

      context.fillText(line, this.pos.x, y);
    }
    else {
      let words = this.currentText.split('\n');
      let line = '';
      let y = this.pos.y;

      for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (n > 0) {
          context.fillText(line, this.pos.x, y);
          line = words[n] + ' ';
          y += this.lineHeight;
        }
        else {
          line = testLine;
        }
      }

      context.fillText(line, this.pos.x, y);
    }

  }

  public CompleteDialog():void {
    this.done = true;

    clearInterval(this.interval);

    for (var i = this.currentChar; i < this.data.text.string.length; i++) {
      this.currentText += this.data.text.string[this.currentChar];
      this.currentChar++;
    }
  }

  public Clear():void {
    clearInterval(this.interval);
  }
}
