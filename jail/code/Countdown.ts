/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Countdown {
  private interval: number = undefined;
  private maxTime: number = 0;
  private time: number = 0;
  private objectToCall: Array<any> = [];
  private endFuncToCall: any = undefined;

  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor() {}

  public Start(time: number):void {
    this.maxTime = time;
    this.time = time;

    Data.Sounds.PlaySound("countdown", false);

    this.interval = setInterval(() => { this.Update(); }, 1000);
  }

  public Update():void {
    this.time--;

    for (var key in this.objectToCall) {
      this.objectToCall[key].Exec(this.maxTime - this.time);
    }

    if (this.time <= 0 && this.endFuncToCall) {
      this.Clear();
      this.endFuncToCall();
    }
  }

  public Draw(context: any):void {
    context.font = "30px Source Sans Pro Bold";
    context.fillText("Temps restant: " + this.time, global.hWidth - 100, 50);
  }

  public Clear():void {
    clearInterval(this.interval);
    delete this.interval;

    delete this.maxTime;
    delete this.time;

    // this.objectToCall.splice(0, this.objectToCall.length);
    delete this.objectToCall;

  }

  public SetObjectToCall(obj: any):void {
    this.objectToCall.push(obj);
  }

  public SetEndFuncToCall(func: any):void {
    this.endFuncToCall = func;
  }
}
