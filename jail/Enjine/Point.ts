/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Point {
  public point: number = 0;
  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor(public mainScene: MainScene) {
    this.Init();
  }

  public Init():void {
  }

  public Draw(context: any):void {
    context.font = "30px Source Sans Pro Bold";
    context.fillText("Pts: " + this.point, (global.size.width / 2) - 200, 50);
  }

  public Clear():void {
    delete this.point;
  }

	public Add(pointToAdd: number):void {
		this.point += pointToAdd;
	}
}
