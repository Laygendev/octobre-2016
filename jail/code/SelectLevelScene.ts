/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SelectLevelScene extends Scene {
	private spriteManager: SpriteManager = new SpriteManager();
	private spriteEurope: SpriteClickable = undefined;
	private spriteFrance: SpriteClickable = undefined;

  constructor() {
    super();
  }

  public Init():void {
		this.started = true;
		this.spriteEurope = new SpriteClickable(Data.Ressources.staticImage['map'], global.size.width / 2 - 500, 50, {width: 0, height: 0}, "staticImage", "terre");
		this.spriteManager.Add(this.spriteEurope);

		this.spriteFrance = new SpriteClickable(Data.Ressources.staticImage['mapFrance'], global.size.width / 2 - 41, 297, {width: 36, height: 37}, "staticImage", "terre");
		this.spriteManager.Add(this.spriteFrance);
	}

  public Update(delta: number):void {
		if (this.spriteFrance.ClickIn()) {
			this.Clear();
			SceneManager.Manager.SetScene(new Level11());
		}
  }

	public Draw(context: any):void {
		this.spriteManager.Draw(context);
  }

	public Clear():void {
		this.spriteManager.Clear();
		delete this.spriteManager;

		this.spriteEurope.Clear();
		delete this.spriteEurope;

		this.spriteFrance.Clear();
		delete this.spriteFrance;
	}
}
