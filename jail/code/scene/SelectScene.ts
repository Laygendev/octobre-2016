/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SelectScene extends Scene {
	private spriteEurope: Sprite = new Sprite(
    Data.Images.backgrounds['europe'],
    'europe',
    'staticImage',
    {x : global.hWidth - 978 / 2, y: global.hHeight - 650 / 2}
  );

	private spriteFrance: Sprite = new Sprite(
    Data.Images.buttons['levelFrance'],
    'france',
    'staticImage',
    {x : global.hWidth - 41, y: 297}
  );

  constructor() {
    super();

    this.spriteManager.Add(this.spriteEurope);
    this.spriteManager.Add(this.spriteFrance);

		this.dialogManager.Load('jail/json/dialog/levelSelectScene.json');
  }

	public Start():void {
    super.Start();
		this.spriteFrance.SetClickable({w: 36, h: 37}, {x: 0, y: 0}, this.GoToParis);
  }

  public Update(delta: number):void {
		super.Update(delta);
  }

	public Draw(context: any):void {
		super.Draw(context);
  }

	public Clear():void {
    super.Clear();
	}

  public GoToParis(): void {
    SceneManager.Manager.currentScene.Clear();
    SceneManager.Manager.SetScene(new Paris());
  }
}
