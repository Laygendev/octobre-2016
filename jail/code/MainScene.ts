/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class MainScene extends Scene {
  protected spriteManager: SpriteManager = new SpriteManager();
  private spawnManager: SpawnManager =  undefined;
  protected character: Character = undefined;
  private spawnHumanPartSprite: Sprite;
  private spriteClickableTerre: SpriteClickable;
  private spriteClickableTrash: SpriteClickable;
  protected timer: Timer = undefined;
  protected point: Point = new Point(this);
  public orderManager: OrderManager = new OrderManager();
  protected spawnOrderManager: SpawnOrderManager = undefined;

  constructor() {
    super();
  }

  public Start():void {
    delete this.dialogManager;
    this.started = true;

    // this.spawnHumanPartSprite = new SpriteRepeat(Data.Ressources.staticImage['tapis'], 0, global.size.height - 41, {width: 100, height: 41 }, "x", "tapis");
    // this.spriteManager.Add(this.spawnHumanPartSprite);

    this.spriteClickableTerre = new SpriteClickable(Data.Ressources.staticImage['terre'], global.size.width / 2  - (873 / 2), global.size.height - 176, {width: 873, height: 176}, "clickableImage", "terre", undefined);
    this.spriteManager.Add(this.spriteClickableTerre);

    this.spriteClickableTrash = new SpriteClickable(Data.Ressources.staticImage['trash'], 20, global.size.height - 130, {width: 111, height: 119}, "clickableImage", "trash", undefined);
    this.spriteManager.Add(this.spriteClickableTrash);

    this.spawnManager = new SpawnManager(this.spriteManager, 2500);

    this.StartChild();
  }

  public StartChild():void {}

  public Init():void {}

  public Spawn(currentTime: number):void {}

  private InitCharacter(spriteKey: string):void {
    var tmpSprite: Sprite = new Sprite(0, 0, Data.Ressources.bodies[spriteKey], 'body', spriteKey);
		this.character = new Character(this, 0, 0, [], 'character');
    this.character.AddChild(tmpSprite);
  }

  public Update(delta: number):void {
		if (this.character) {
	    this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
	    this.character.Update();
	}

		let spriteKey = this.spriteManager.Update();

		if (spriteKey && !this.character) {
			this.InitCharacter(spriteKey);
		}


    if (this.spriteClickableTerre.ClickIn() && this.character) {
      let order = this.character.CheckElement(this.orderManager);
       if (order) {
         Data.Sound.PlaySound('sendHuman', false);
         order.SetCharacter(this.character);
         this.character.Clear();
         this.point.Add(20);

         delete this.character;
       }
       else {
          Data.Sound.PlaySound('wrong', false);
       }
    }

    if (this.spriteClickableTrash.ClickIn() && this.character) {
      this.character.Clear();
      delete this.character;
      Data.Sound.PlaySound('deleteHuman', false);
    }
  }

  public Draw(context: any):void {
    this.timer.Draw(context);

    this.spriteManager.Draw(context);
		this.point.Draw(context);

    this.DrawChildScene(context);
    this.notificationManager.Draw(context);

    if (this.character) {
      this.character.Draw(context);
    }
  }

  protected DrawChildScene(context: any):void {}

	public Clear():void {
    this.spriteManager.Clear();
    delete this.spriteManager;

    this.spawnManager.Clear();
    delete this.spawnManager;

    if (this.character) {
      this.character.Clear();
      delete this.character;
    }

    this.spawnOrderManager.Clear();
    delete this.spawnOrderManager;

    this.timer.Clear();
    delete this.timer;
	}

  public ChangeScene():void {
    this.Clear();
    SceneManager.Manager.SetScene(new EndScene(this.orderManager, this.point));
  }

  public Resize():void {
    this.spriteClickableTerre.SetPos(global.size.width / 2  - (873 / 2), global.size.height - 176);
    this.spriteClickableTrash.SetPos(20, global.size.height - 130);
    this.spriteManager.Resize();
  }
}
