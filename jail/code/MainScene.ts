/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class MainScene extends Scene {
  private spawnManager: SpawnManager =  undefined;
  protected character: Character = undefined;
  private spawnHumanPartSprite: Sprite;
  private spriteClickableTerre: SpriteClickable;
  private spriteClickableTrash: SpriteClickable;
  protected timer: Timer = undefined;
  protected point: Point = new Point(this);
  public orderManager: OrderManager = new OrderManager();
  protected spawnOrderManager: SpawnOrderManager = undefined;
  public canSend: boolean = false;

  constructor() {
    super();
  }

  public Start():void {
    delete this.dialogManager;
    this.started = true;

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
    super.Update(delta);

		if (this.character) {
	    this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
	    this.character.Update();
	}

		let spriteKey = this.spriteManager.Update();

		if (spriteKey && !this.character) {
      this.canSend = false;
      setTimeout( () => { this.canSend = true; }, 50);
			this.InitCharacter(spriteKey);
		}


    if (this.spriteClickableTerre.ClickIn() && this.character && this.canSend) {
      let order = this.character.CheckElement(this.orderManager);
       if (order) {
         Data.Sound.PlaySound('send', false);
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
      Data.Sound.PlaySound('poubelle', false);
    }
  }

  public Draw(context: any):void {
    super.Draw(context);

    this.timer.Draw(context);
		this.point.Draw(context);

    if (this.orderManager) {
      this.orderManager.Draw(context);
    }

    if (this.character) {
      this.character.Draw(context);
    }
  }

  public UpdateNoStarted(delta: number):void {
    super.UpdateNoStarted(delta);
  }

  public DrawNoStarted(context: any):void {
		super.DrawNoStarted(context);
	}

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
