/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
Gères un dialogue
*/

class Dialog {
  /**
   * L'intervalle pour l'écriture "machine à écrire"
   * @type {any}
   */
  private interval: any;

  /**
   * Le texte actuelle (Incrémenter à chaque tour d'intervalle)
   * @type {string}
   */
  public currentText: string = "";

  /**
   * Le caractère actuelle
   * @type {number}
   */
  public currentChar: number = 0;

  /**
   * La taille maximum du texte
   * @type {number}
   */
  private maxWidth: number = 480;

  /**
   * La hauteur entre chaque ligne
   * @type {number}
   */
  private lineHeight: number = 40;

  /**
   * Etat du texte: finit ou non
   * @type {boolean}
   */
  public done: boolean = false;

  /**
   * La position du texte
   * @type {any}
   */
  public pos: any = {x: 0, y: 0};

  /**
   * Initialise la position et la vitesse d'écriture du texte
   * Initialise l'intervalle qui permet de faire l'effet "machine à écrire"
   * @param  {any}    publicdata Données reçu du fichier JSON
   * @param  {number} speedText  La vitesse d'écriture du texte
   * @return {void}            nothing
   */
  constructor(public data: any, speedText: number) {
    this.pos.x = data.text.x;
    this.pos.y = data.text.y;

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
    context.translate(global.hWidth - this.data.rect.width / 2, global.hHeight - this.data.rect.height / 2);
    context.fillRect(0, 0, this.data.rect.width, this.data.rect.height);
    // mouseSprite.Draw(context);
    context.translate(20, 50);
  }

  public Draw(mouseSprite: SpriteClickable, context: any):void {
    this.DrawRect(mouseSprite, context);

    // if (this.sprite) {
    //   this.sprite.Draw(context);
    // }

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
