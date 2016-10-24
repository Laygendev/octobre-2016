/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class MainScene extends Scene {
  private spriteManager: SpriteManager = new SpriteManager();
  private spawnManager: SpawnManager =  new SpawnManager(this.spriteManager, 1000);
  private character: Character = new Character(0, 0, []);

  constructor() {
    super();
  }

  public Init():void {
    this.InitCharacter();
  }

  private InitCharacter():void {
    var tmpSprite: Sprite = new Sprite(0, 0, Data.Ressources.bodies['body1'], 'body');
    this.character.AddChild(tmpSprite);
  }

  public Update():void {
    this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
    this.character.Update();
    this.spriteManager.Update();

		// Vérifie si on a tous les éléments
		if(this.character.CheckElement()) {
			this.Clear();
			SceneManager.Manager.SetScene(new EndScene(this.character, false));
		}
  }

  public Draw(context: any):void {
    this.character.Draw(context);
    this.spriteManager.Draw(context);
  }

	public Clear():void {

	}
}
