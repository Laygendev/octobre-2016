/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class EndScene extends Scene {
	private buttonOk: any = undefined;

  constructor(public orderManager: OrderManager, public score: Score) {
    super();
  }

  public Update(delta: number):void {
		super.Update(delta);

		if (this.buttonOk.ClickIn()) {
			SceneManager.Manager.SetScene(new SelectScene());
		}
  }

	public Draw(context: any):void {
		super.Draw(context);

		context.font = "80px Source Sans Pro Bold";
		context.fillText("Mission terminée", (global.size.width / 2) - 200, 160);
		context.font = "20px Source Sans Pro Bold";
		context.fillText("Score: " + this.score.point, (global.size.width / 2) - 200, 200);

		context.save();
		context.translate(global.size.width / 2 - 200, global.size.height / 2 - 20);
		context.scale(0.5, 0.5);
		for (var key in this.orderManager.listOrder) {
			// if (this.orderManager.listOrder[key].done) {
			// 	console.log(this.orderManager.listOrder[key].character);
			// 	this.orderManager.listOrder[key].character.Draw(context);
			// }
		}
		context.restore();
  }
}
