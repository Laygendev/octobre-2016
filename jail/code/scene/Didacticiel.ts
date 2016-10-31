/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SceneDidacticiel extends MainScene {
  constructor() {
    super();

    this.dialogManager.Load('jail/json/dialog/levelDidacticiel.json');
  }

  public Start():void {
    super.Start();
    this.spawnOrderManager = new SpawnOrderManager('jail/json/level/orderDidacticiel.json', this.orderManager, this.spawnManager);
    this.countdown.SetObjectToCall(this.spawnOrderManager);
    this.countdown.SetObjectToCall(this.spawnManager);

    this.countdown.Start(60);
  }

  public Update(delta: number):void {
    super.Update(delta);
  }

  public Draw(context: any):void {
    super.Draw(context);
  }
}
