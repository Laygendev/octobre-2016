/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class MainScene extends Scene {
  /**
   * Le personnage
   * @type {Character}
   */
  public character: Character = undefined;

  /**
   * Le sprite qui permet de livré un humain sur Terre
   * @type {SpriteClickable}
   */
  private spriteClickableTerre: Sprite = new Sprite(
    Data.Images.buttons['terre'],
    'terre',
    'buttons',
    {x : global.hWidth - (872 / 2), y: global.height - 176},
  );

  /**
   * Le sprite qui permet de supprimer un humain
   * @type {SpriteClickable}
   */
  private spriteClickableTrash: Sprite = new Sprite(
    Data.Images.buttons['trash'],
    'trash',
    'buttons',
    {x : 0, y: global.height - 119}
  );

  /**
   * Gestion du chronomètre
   * @type {Countdown}
   */
  protected countdown: Countdown = undefined;

  /**
   * Gestion du spawn des commandes d'humains selon le chronomètre
   * @type {SpawnOrderManager}
   */
  public spawnOrderManager: SpawnOrderManager = undefined;

  /**
   * Gestion des spawn des parties humaines selon spawnOrderManager
   * @type {SpawnManager}
   */
  public spawnManager: SpawnManager = new SpawnManager();

  constructor() {
    super();

    this.spriteManager.Add(this.spriteClickableTerre);
    this.spriteManager.Add(this.spriteClickableTrash);
  }

  public Start():void {
    super.Start();

    this.countdown = new Countdown();
    this.countdown.SetEndFuncToCall(this.ChangeScene);

    this.score = new Score();
  }

  public Update(deltaTime: number):void {
    super.Update(deltaTime);

		if (this.character) {
	    this.character.Update();
    }

		if (this.bodyManager) {
	    this.bodyManager.Update(deltaTime);
    }
  }

  public Draw(context: any):void {
    this.bodyManager.Draw(context);

    super.Draw(context);

    if (this.countdown) {
      this.countdown.Draw(context);
    }

    if (this.orderManager) {
      this.orderManager.Draw(context);
    }

    if (this.character) {
      this.character.Draw(context);
    }
  }

	public Clear():void {
    super.Clear();

    this.score.Clear();
    delete this.score;
	}

  public InitCharacter(triggerElement: any):void {
    this.character = new Character();
    this.spriteClickableTrash.SetClickable({w: 111, h: 119}, {x: 0, y: 0}, this.character.GoTrash);
    this.spriteClickableTerre.SetClickable({w: 873, h: 176}, {x: 0, y: 0}, this.character.Delivery);

    let child: Sprite = new Sprite(
      Data.Images.spriteSheet,
      "body0",
      "body",
      {
        x: 0,
        y: 0
      }
    );

    this.character.AddChild(child);
    this.bodyManager.Remove(triggerElement);
  }

  public RemoveCharacter():void {
    if (this.character) {
      this.character.Clear();
      delete this.character;
      Data.Sounds.PlaySound('poubelle', false);
    }
  }

  public Delivery():void {
    if (this.character) {
      let order = this.character.CheckElement(this.orderManager);
      if (order) {
        Data.Sounds.PlaySound('send', false);
        order.SetCharacter(this.character);
        this.score.Add (20);
        delete this.character;
      }
      else {
         Data.Sounds.PlaySound('wrong', false);
      }
    }
  }

  public ChangeScene():void {
    this.Clear();
    SceneManager.Manager.SetScene(new EndScene(SceneManager.Manager.currentScene.orderManager));
  }
}
