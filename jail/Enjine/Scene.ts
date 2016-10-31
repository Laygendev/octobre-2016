/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Scene {
  /**
   * Gestion des sprites
   * @type {SpriteManager}
   */
  public spriteManager: SpriteManager = new SpriteManager();

  /**
   * Gestion des commandes d'humains
   * @type {OrderManager}
   */
  public orderManager: OrderManager = new OrderManager();

  /**
   * Gestion des corps humain cliquable
   * @type {BodyManager}
   */
  public bodyManager: BodyManager = new BodyManager();

  /**
   * Gestion des dialogues
   * @type {DialogManager}
   */
  public dialogManager: DialogManager = new DialogManager();

  /**
   * Le button permettant de quitter le jeu à tout moment
   * @type {SpriteClickable}
   */
  public buttonExit: Sprite = new Sprite(
    Data.Images.buttons['exit'],
    'exit',
    'buttons',
    {x : global.width - 20, y: 0}
  );

  public character: Character = undefined;

  public score: Score = undefined;

  /**
   * Ajoutes buttonExit dans spriteManager
   * @return {void} nothing
   */
  constructor() {
    this.buttonExit.SetClickable({w: 19, h: 19}, {x: 0, y: 0}, global.application.Exit);
    this.spriteManager.Add(this.buttonExit);
  }

  public Start():void {}

  public Update(delta: number):void {
    if (this.spriteManager) {
      this.spriteManager.Update(delta);
    }
  }

  public Draw(context: any):void {
    if (this.spriteManager) {
      this.spriteManager.Draw(context);
    }

    if (this.dialogManager) {
      this.dialogManager.Draw(context);
    }

    if (this.score) {
      this.score.Draw(context);
    }
  }

  public Clear():void {
    this.spriteManager.Clear();
    delete this.spriteManager;

    this.bodyManager.Clear();
    delete this.bodyManager;
  }

  public InitCharacter(triggerElement: any):void {}
  public RemoveCharacter():void {}
  public Delivery():void {}
  public ChangeScene():void {}
}
