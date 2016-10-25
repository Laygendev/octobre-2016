/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class EndScene extends Scene {
	private spriteManager: SpriteManager = new SpriteManager();
	private buttonRestart: any = undefined;
	private gameOver: boolean = true;
	private character: Character = undefined;

  constructor(character: Character, gameOver: boolean) {
    super();
		this.character = character;

		if (gameOver != undefined) {
			this.gameOver = gameOver;
		}

		if (this.character) {
			this.character.x = global.size.width / 2;
			this.character.y = global.size.height / 2;
		}

		this.Init();
  }

  public Init():void {
		this.buttonRestart = new SpriteClickable(Data.Ressources.buttons['restart'], (global.size.width / 2) - (163 / 2), global.size.height - 200, {width: 163, height: 45}, 'button');
		this.spriteManager.Add(this.buttonRestart);

		if (!this.gameOver) {
			this.InitWin();
		}
		else {
			this.InitGameOver();
		}
  }

	InitWin():void {

	}

	InitGameOver():void {

	}

  public Update():void {
		this.spriteManager.Update();

		if (this.buttonRestart.ClickIn()) {
			SceneManager.Manager.SetScene(new SelectBody());
		}
  }

  public Draw(context: any):void {
		if (this.gameOver) {
			context.font = "80px Source Sans Pro Bold";
			context.fillText("Game Over!", (global.size.width / 2) - 200, 160);
		}
		else {
			context.font = "80px Source Sans Pro Bold";
			context.fillText("Victoire!", (global.size.width / 2) - 140, 160);
		}

		if (this.character) {
			this.character.Draw(context);
		}

		this.spriteManager.Draw(context);
  }
}
