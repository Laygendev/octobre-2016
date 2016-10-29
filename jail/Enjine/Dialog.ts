/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Dialog {
  private interval: any;
  public currentText: string = "";
  public currentChar: number = 0;
  private maxWidth: number = 500;
  private lineHeight: number = 30;
  public done: boolean = false;

  constructor(public text: string, speedText: number, public pos: any) {
    this.interval = setInterval( () => { this.Update(); }, speedText );
  }

  private Update():void {
    if (this.currentChar < this.text.length) {
      this.currentText += this.text[this.currentChar];
      this.currentChar++;
    }
    else {
      this.done = true;
    }
  }

  public Draw(context: any):void {
    context.fillStyle = "black";
    context.font = "30px Source Sans Pro Bold";

    let words = this.currentText.split(' ');
    let line = '';
    let y = 0;

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > this.maxWidth && n > 0) {
        context.fillText(line, this.pos.x, this.pos.y + y);
        line = words[n] + ' ';
        y += this.lineHeight;
      }
      else {
        line = testLine;
      }
    }

    context.fillText(line, this.pos.x, y);
  }

  public CompleteDialog():void {
    this.done = true;

    clearInterval(this.interval);

    for (var i = this.currentChar; i < this.text.length; i++) {
      this.currentText += this.text[this.currentChar];
      this.currentChar++;
    }
  }

  public Clear():void {
    clearInterval(this.interval);
  }
}
