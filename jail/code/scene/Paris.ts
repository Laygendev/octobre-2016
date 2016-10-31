/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Paris extends MainScene {
  constructor() {
    super();

    this.dialogManager.Load('jail/json/dialog/level11.json');
  }

  public Start():void {
    super.Start();
    this.spawnOrderManager = new SpawnOrderManager('jail/json/level/order1-1.json', this.orderManager, this.spawnManager);
    this.countdown.SetObjectToCall(this.spawnOrderManager);
    this.countdown.SetObjectToCall(this.spawnManager);

    this.countdown.Start(120);
  }

  public Update(delta: number):void {
    super.Update(delta);
  }

  public Draw(context: any):void {
    super.Draw(context);
  }
}
