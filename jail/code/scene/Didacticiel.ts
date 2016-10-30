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
  }

  public InitOrder() {
    this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/orderDidacticiel.json');
  }

  public Spawn(currentTime: number):void {
    this.spawnOrderManager.Exec(currentTime);
  }

  public Update(delta: number):void {
    super.Update(delta);
  }

  public Draw(context: any):void {
    super.Draw(context);
  }

  public UpdateNoStarted(delta: number):void {
    super.UpdateNoStarted(delta);
  }

  public DrawNoStarted(context: any):void {
    super.DrawNoStarted(context);
  }
}
