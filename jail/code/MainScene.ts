/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class MainScene extends Scene {
  protected spriteManager: SpriteManager = new SpriteManager();
  private spawnManager: SpawnManager =  new SpawnManager(this.spriteManager, 2000);
  protected character: Character = undefined;
  private spawnHumanPartSprite: Sprite;
  private timer: Timer = new Timer(1000, 800, this);
  protected point: Point = new Point(this);

  constructor(public selectedBody: string) {
    super();
  }

  public Init():void {
    this.spawnHumanPartSprite = new SpriteRepeat(Data.Ressources.staticImage['tapis'], 0, global.size.height - 41, {width: 100, height: 41 }, "x", "tapis");
    this.spriteManager.Add(this.spawnHumanPartSprite);
  }

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

      if (this.character.can.delete) {
        this.character.Clear();
        this.character = undefined;
      }
	}

		let spriteKey = this.spriteManager.Update();

		if (spriteKey && !this.character) {
			this.InitCharacter(spriteKey);
		}


    this.UpdateChildScene(delta);
  }

  protected UpdateChildScene(delta: number):void {

  }

  public Draw(context: any):void {
    this.timer.Draw(context);
		if (this.character) {
	    this.character.Draw(context);
		}

    this.spriteManager.Draw(context);
		this.point.Draw(context);

    this.DrawChildScene(context);
  }

  protected DrawChildScene(context: any):void {}

	public Clear():void {
    this.timer.Clear();
    delete this.timer;
	}

  public ChangeScene(gameOver:boolean):void {
    this.Clear();
    SceneManager.Manager.SetScene(new EndScene(this.character, gameOver));
  }
}
