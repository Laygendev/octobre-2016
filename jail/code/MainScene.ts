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
    var tmpSprite: Sprite = new Sprite(0, 0, Data.Ressources.bodies['body0']);
    this.character.AddChild(tmpSprite);
    tmpSprite = new Sprite(0, 0, Data.Ressources.humanPart['head0']);
    tmpSprite.SetOffset({x: 0, y: 80});
    this.character.AddChild(tmpSprite);
  }

  public Update():void {
    this.character.Update();
  }

  public Draw(context: any):void {
    this.character.Draw(context);
    this.spriteManager.Draw(context);
  }
}
