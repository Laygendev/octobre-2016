/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class MainScene extends Scene {
  private spriteManager: SpriteManager = new SpriteManager();
  // private spawnManager: SpawnManager =  new SpawnManager(this.spriteManager, 1000);
  private character: Character = new Character(0, 0, []);

  constructor() {
    super();
  }

  public Init():void {
    this.InitCharacter();
    let tmpSprite: Sprite = undefined;

    tmpSprite = new Sprite(100, 200, Data.Ressources.humanPart['head0']);
    this.spriteManager.Add(tmpSprite);

    tmpSprite = new Sprite(200, 200, Data.Ressources.humanPart['leg0']);
    this.spriteManager.Add(tmpSprite);

    tmpSprite = new Sprite(400, 200, Data.Ressources.humanPart['arm0']);
    this.spriteManager.Add(tmpSprite);

    tmpSprite = new Sprite(600, 200, Data.Ressources.humanPart['arm1']);
    this.spriteManager.Add(tmpSprite);
  }

  private InitCharacter():void {
    var tmpSprite: Sprite = new Sprite(0, 0, Data.Ressources.bodies['body0']);
    this.character.AddChild(tmpSprite);
  }

  public Update():void {
    this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
    this.character.Update();
    this.spriteManager.Update();
  }

  public Draw(context: any):void {
    this.character.Draw(context);
    this.spriteManager.Draw(context);
  }
}
