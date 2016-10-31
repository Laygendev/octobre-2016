/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Scene {
  /**
   * Gestion des sprites
   * @type {SpriteManager} [description]
   */
  public spriteManager: SpriteManager = new SpriteManager();

  /**
   * Gestion des dialogues
   * @type {DialogManager}
   */
  public dialogManager: DialogManager = new DialogManager();

  /**
   * Le button permettant de quitter le jeu à tout moment
   * @type {SpriteClickable}
   */
  public buttonExit: SpriteClickable = new SpriteClickable(
    Data.Images.buttons['exit'],
    'exit',
    'buttons',
    {x : global.width - 20, y: 0},
    {width: 19 , height: 19}
  );

  /**
   * Ajoutes buttonExit dans spriteManager
   * @return {void} nothing
   */
  constructor() {
    this.spriteManager.Add(this.buttonExit);
  }

  public Start():void {}

  public Update(delta: number):void {}

  public Draw(context: any):void {
    if (this.spriteManager) {
      this.spriteManager.Draw(context);
    }

    if (this.dialogManager) {
      this.dialogManager.Draw(context);
    }
  }

  public Clear():void {

  }
}
