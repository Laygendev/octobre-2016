/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class EndScene extends Scene {
	private spriteManager: SpriteManager = new SpriteManager();
	private buttonRestart: any = undefined;
	private gameOver: boolean = true;
	private character: Character = undefined;

  constructor(public orderManager: OrderManager, public point: Point) {
    super();
		this.started = true;
		this.Init();
  }

  public Init():void {
		this.buttonRestart = new SpriteClickable(Data.Ressources.buttons['restart'], (global.size.width / 2) - (163 / 2), global.size.height - 200, {width: 163, height: 45}, 'button', 'button');
		this.spriteManager.Add(this.buttonRestart);
		for (var key in this.orderManager.listOrder) {
			if (this.orderManager.listOrder[key].done) {
				let keyNumber: any = key;
				this.orderManager.listOrder[key].character.SetPos(keyNumber * 150, 0);
			}
		}
	}

  public Update(delta: number):void {
		super.Update(delta);
		if (this.buttonRestart.ClickIn()) {
			SceneManager.Manager.SetScene(new SelectLevelScene());
		}
  }

	public Draw(context: any):void {
		super.Draw(context);

		context.font = "80px Source Sans Pro Bold";
		context.fillText("Mission terminée", (global.size.width / 2) - 200, 160);
		context.font = "20px Source Sans Pro Bold";
		context.fillText("Score: " + this.point.point, (global.size.width / 2) - 200, 200);

		context.save();
		context.translate(global.size.width / 2 - 200, global.size.height / 2 - 20);
		context.scale(0.5, 0.5);
		for (var key in this.orderManager.listOrder) {
			if (this.orderManager.listOrder[key].done) {
				console.log(this.orderManager.listOrder[key].character);
				this.orderManager.listOrder[key].character.Draw(context);
			}
		}
		context.restore();
  }
}
