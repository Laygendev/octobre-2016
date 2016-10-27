/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Level11 extends MainScene {
  spawnOrderManager: SpawnOrderManager = undefined;
  orderManager: OrderManager = new OrderManager();

  constructor(public selectedBody: string) {
    super(selectedBody);
    this.InitOrder();
  }

  public InitOrder() {
    this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/order1-1.json');
  }

  public Spawn(currentTime: number):void {
    this.spawnOrderManager.Exec(currentTime);
  }

  protected DrawChildScene(context: any):void {
    this.orderManager.Draw(context);
  }

	public Clear():void {

	}
}
