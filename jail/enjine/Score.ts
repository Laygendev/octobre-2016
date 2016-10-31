/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Score {
  public point: number = 0;
  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor() {}

  public Draw(context: any):void {
    context.font = "30px Source Sans Pro Bold";
    context.fillText("Pts: " + this.point, (global.hWidth) - 200, 50);
  }

  public Clear():void {
    delete this.point;
  }

	public Add(pointToAdd: number):void {
		this.point += pointToAdd;
	}
}
