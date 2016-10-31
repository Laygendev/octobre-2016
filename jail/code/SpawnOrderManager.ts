/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpawnOrderManager {
  public jsonLevel: any = undefined;

  constructor(public pathToJson: string, public orderManager: OrderManager, public spawnManager: SpawnManager) {
    Data.JSONLoader.Exec(pathToJson, (data: Array<any>) => {
      this.jsonLevel = data;
    });
  }


  Exec(currentTime: number): void {
    if (this.jsonLevel[currentTime]) {
      let listKeyWithNoTime: Array<string> = [];
      for (var key in this.jsonLevel[currentTime]) {
          let keySplitted = this.jsonLevel[currentTime][key].split('_');
          listKeyWithNoTime.push(keySplitted[1]);
      }

      this.orderManager.Add(new Order(listKeyWithNoTime));
      this.spawnManager.Add(this.jsonLevel[currentTime]);
    }
  }

  Clear():void {
    delete this.jsonLevel;
  }
}
