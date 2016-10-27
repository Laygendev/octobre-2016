/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Timer {
  secondTime: number = 0;
  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor(public time: number, public maxTime: number, public mainScene: MainScene) {
    this.Init();
  }

  public Init():void {
    setInterval(() => { this.Update() }, this.time);
  }

  public Update():void {
    this.secondTime += 1;
    this.mainScene.Spawn(this.secondTime);

    if (this.secondTime >= this.maxTime) {
      this.mainScene.ChangeScene(false);
    }
  }

  public Draw(context: any):void {
    context.font = "30px Source Sans Pro Bold";
    context.fillText("Temps restant: " + (this.maxTime - this.secondTime), (global.size.width / 2) - 100, 50);
  }

  public Clear():void {
    delete this.maxTime;
    delete this.secondTime;
    delete this.mainScene;
  }
}
