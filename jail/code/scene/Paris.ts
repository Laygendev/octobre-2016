/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Level11 extends MainScene {
  constructor() {
    super();

    this.dialogManager.Load('jail/json/dialog/level11.json');
    this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/order1-1.json');

    this.countdown = new Countdown(120);
  }
}
