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
          this.orderManager.Add(new Order(currentTime, this.jsonLevel[currentTime][key][x]));

    			for (var i in this.jsonLevel[currentTime][key][x]) {
    				let spriteMovable = this.spriteGenerator.Exec(this.jsonLevel[currentTime][key][x][i]);

    				if (!spriteMovable) { // C'est un corps
    					spriteMovable = new SpriteMovableAndClickable(global.size.width, global.size.height - 100, Data.Ressources.bodies[this.jsonLevel[currentTime][key][x][i]], "body", -1, 0, 0, this.jsonLevel[currentTime][key][x][i]);
    				}

            spriteMovable.SetSpriteManager(this.spriteManager);
    				this.spriteManager.Add(spriteMovable);
          }
  			}
      }
    }
  }
}
