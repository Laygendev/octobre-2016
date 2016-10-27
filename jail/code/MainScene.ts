/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class MainScene extends Scene {
  protected spriteManager: SpriteManager = new SpriteManager();
  // private spawnManager: SpawnManager =  new SpawnManager(this.spriteManager, 1000);
  private character: Character = undefined;
  private spawnHumanPartSprite: Sprite;
  private timer: Timer = new Timer(1000, 800, this);

  constructor(public selectedBody: string) {
    super();
  }

  public Init():void {
    this.spawnHumanPartSprite = new SpriteRepeat(Data.Ressources.staticImage['tapis'], 0, global.size.height - 41, {width: 100, height: 41 }, "x");
    this.spriteManager.Add(this.spawnHumanPartSprite);
  }

  public Spawn(currentTime: number):void {}

  private InitCharacter(spriteKey: string):void {
		console.log(spriteKey);
    var tmpSprite: Sprite = new Sprite(0, 0, Data.Ressources.bodies[spriteKey], 'body');
		this.character = new Character(this, 0, 0, []);
    this.character.AddChild(tmpSprite);
  }

  public Update(delta: number):void {
		if (this.character) {
	    this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
	    this.character.Update();

			// Vérifie si on a tous les éléments
			if(this.character.CheckElement()) {
	      this.ChangeScene(false);
			}
	}

		let spriteKey = this.spriteManager.Update();
		console.log(spriteKey);

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
