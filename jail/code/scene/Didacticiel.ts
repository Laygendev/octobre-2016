/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SceneDidacticiel extends MainScene {
  constructor() {
    super();

    this.dialogManager.Load('jail/json/dialog/levelDidacticiel.json');
    this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/orderDidacticiel.json');
    this.countdown = new Countdown(60);
  }

  public Start():void {
    
  }

  public Update(delta: number):void {
    super.Update(delta);
  }

  public Draw(context: any):void {
    super.Draw(context);
  }
}
