/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class EndScene extends Scene {
	private spriteManager: SpriteManager = new SpriteManager();
	private buttonRestart: any = undefined;
	private gameOver: boolean = true;
	private character: Character = undefined;

  constructor(public orderManager: OrderManager) {
    super();
		console.log(this.orderManager);
		
		this.Init();
  }

  public Init():void {
		this.buttonRestart = new SpriteClickable(Data.Ressources.buttons['restart'], (global.size.width / 2) - (163 / 2), global.size.height - 200, {width: 163, height: 45}, 'button', 'button');
  }

	InitWin():void {

	}

	InitGameOver():void {

	}

  public Update(delta: number):void {
		this.spriteManager.Update();

		if (this.buttonRestart.ClickIn()) {
			SceneManager.Manager.SetScene(new SelectBody());
		}
  }

	public Draw(context: any):void {
			context.font = "80px Source Sans Pro Bold";
			context.fillText("Victoire!", (global.size.width / 2) - 140, 160);

		this.spriteManager.Draw(context);
  }
}
