/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpawnOrderManager {
  public jsonLevel: any = undefined;
	private spriteGenerator: SpriteGenerator = new SpriteGenerator();

  constructor(public spriteManager: SpriteManager, public orderManager: OrderManager, public pathToJson: string) {
    Data.JSONLoader.Exec(pathToJson, (data: Array<any>) => {
      this.jsonLevel = data;
    });
  }


  Exec(currentTime: number): void {
    // Traite la queue
    if (this.jsonLevel[currentTime]) {
      for (var key in this.jsonLevel[currentTime]) {
        for (var x in this.jsonLevel[currentTime][key]) {
          this.orderManager.Add(new Order(this.jsonLevel[currentTime][key][x]));
  			}
      }
    }
  }

  Clear():void {
    delete this.jsonLevel;
    this.spriteGenerator.Clear();
    delete this.spriteGenerator;
  }
}
