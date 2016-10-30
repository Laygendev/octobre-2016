/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Timer {
  private mainInterval: number = undefined;
  private framesPerSecond: number = 1000 / 30;
  private lastTime: number = 0;
  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor(public application: Application) {
    this.lastTime = new Date().getTime();
    this.mainInterval = setInterval(() => { this.Update(); }, this.framesPerSecond);
  }

  public Update():void {
    let newTime: number = new Date().getTime();
    let delta: number = (newTime - this.lastTime) / 1000;
    this.lastTime = newTime;

    this.application.Update(delta);
  }
}
