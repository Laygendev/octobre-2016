/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class MainScene extends Scene {
  protected spriteManager: SpriteManager = new SpriteManager();
  // private spawnManager: SpawnManager =  new SpawnManager(this.spriteManager, 1000);
  private character: Character = new Character(this, 0, 0, []);
  private spawnHumanPartSprite: Sprite;
  private timer: Timer = new Timer(1000, 50, this);

  constructor(public selectedBody: string) {
    super();
  }

  public Init():void {
    this.InitCharacter();
    this.spawnHumanPartSprite = new SpriteRepeat(Data.Ressources.staticImage['tapis'], 0, global.size.height - 41, {width: 100, height: 41 }, "x");
    this.spriteManager.Add(this.spawnHumanPartSprite);
  }

  public Spawn(currentTime: number):void {}

  private InitCharacter():void {
    // var tmpSprite: Sprite = new Sprite(0, 0, Data.Ressources.bodies[this.selectedBody], 'body');
    // this.character.AddChild(tmpSprite);
  }

  public Update(delta: number):void {
    this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
    this.character.Update();
    this.spriteManager.Update();

		// Vérifie si on a tous les éléments
		if(this.character.CheckElement()) {
      this.ChangeScene(false);
		}

    this.UpdateChildScene(delta);
  }

  protected UpdateChildScene(delta: number):void {

  }

  public Draw(context: any):void {
    this.timer.Draw(context);
    this.character.Draw(context);
    this.spriteManager.Draw(context);

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
