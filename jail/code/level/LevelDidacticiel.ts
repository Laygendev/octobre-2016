/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class LevelDidacticiel extends MainScene {
  constructor() {
    super();

    this.dialogManager.Load('jail/json/dialog/levelDidacticiel.json');
  }

  public StartChild():void {
    this.InitOrder();
    this.timer = new Timer(1000, 60, this);
    // this.timer.LoadNotification(this.notificationManager, 'jail/json/notification/levelDidacticiel.json');
  }

  public InitOrder() {
    this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/orderDidacticiel.json');
  }

  public Spawn(currentTime: number):void {
    this.spawnOrderManager.Exec(currentTime);
  }

  protected DrawChildScene(context: any):void {
    this.orderManager.Draw(context);
  }

  public UpdateNoStarted(delta: number):void {

  }

  public DrawNoStarted(context: any):void {
    if (this.dialogManager) {
      this.dialogManager.Draw(context);
    }
  }
}
