/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SelectBody extends Scene {
  private spriteManager: SpriteManager = new SpriteManager();

  constructor() {
    super();
		this.Init();
  }

  public Init():void {
    let tmpSprite: SpriteClickable = undefined;
    tmpSprite = new SpriteClickable(undefined, global.size.width / 2 - 200, global.size.height / 2 - 50, Data.Ressources.bodies['body0'], 'body');
    this.spriteManager.Add(tmpSprite);

    tmpSprite = new SpriteClickable(undefined, global.size.width / 2 - 50, global.size.height / 2 - 50, Data.Ressources.bodies['body1'], 'body');
    this.spriteManager.Add(tmpSprite);

    tmpSprite = new SpriteClickable(undefined, global.size.width / 2 + 100, global.size.height / 2 - 50, Data.Ressources.bodies['body2'], 'body');
    this.spriteManager.Add(tmpSprite);
  }

  public Update():void {
    this.spriteManager.Update();

    for (var key in this.spriteManager.listSprite["body"]) {
      if (this.spriteManager.listSprite["body"][key].ClickIn()) {
        this.Clear();
        this.ChangeScene('body' + key);
        break;
      }
    }
  }

  public Draw(context: any):void {
    this.spriteManager.Draw(context);
  }

  public ChangeScene(selectedBody: string):void {
    this.Clear();
    SceneManager.Manager.SetScene(new MainScene(selectedBody));
  }

  public Clear():void {

  }
}
