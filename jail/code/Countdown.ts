/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Countdown {
  private interval: number = undefined;

  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor(public time: number) {
    this.interval = setInterval(() => { this.Update(); }, 1000);
  }

  public Update():void {
  }

  public Clear():void {

  }
}
