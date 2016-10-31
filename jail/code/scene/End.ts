/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class EndScene extends Scene {
	private buttonOk: Sprite = new Sprite(
    Data.Images.buttons['ok'],
    'ok',
    'buttons',
    {x : global.hWidth - 163 / 2, y: global.height - 100}
  );

  constructor(public orderManager: OrderManager) {
    super();
		this.dialogManager.Clear();
		delete this.dialogManager;
		this.buttonOk.SetClickable({w: 163, h: 45}, {x: 0, y: 0}, this.ChangeScene);
		this.spriteManager.Add(this.buttonOk);
  }

  public Update(delta: number):void {
		super.Update(delta);
  }

	public Draw(context: any):void {
		super.Draw(context);

		context.font = "80px Source Sans Pro Bold";
		context.fillText("Mission terminée", (global.hWidth) - 200, 160);
		// context.font = "20px Source Sans Pro Bold";
		// context.fillText("Score: " + this.score.point, (global.size.width / 2) - 200, 200);

		context.save();
		context.translate(global.hWidth / 2 - 200, global.hHeight / 2 - 20);
		context.scale(0.5, 0.5);
		for (var key in this.orderManager.listOrder) {
			if (this.orderManager.listOrder[key].done) {
				this.orderManager.listOrder[key].character.Draw(context);
			}
		}
		context.restore();
  }

	public Clear():void {
		super.Clear();
	}

	public ChangeScene():void {
		SceneManager.Manager.currentScene.Clear();
		SceneManager.Manager.SetScene(new SelectScene());
	}
}
