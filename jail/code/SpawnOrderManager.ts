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
      this.orderManager.Add(new Order(currentTime, this.jsonLevel[currentTime]));

			for (var key in this.jsonLevel[currentTime]) {
				let spriteMovable = this.spriteGenerator.Exec(this.jsonLevel[currentTime][key]);

				if (!spriteMovable) { // C'est un corps
					spriteMovable = new SpriteMovableAndClickable(global.size.width, global.size.height - 100, Data.Ressources.bodies[this.jsonLevel[currentTime][key]], "body", -1, 0, 0, this.jsonLevel[currentTime][key]);
				}

				this.spriteManager.Add(spriteMovable);
			}
    }
  }
}