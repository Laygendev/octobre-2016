/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module Data {
  export class Object {
    static bodies: any = undefined;
    static humanParts: any = undefined;
    static bodiesSpawn: any = undefined;
    static ordersSpawn: any = undefined;

    static Load(cb: () => void):void {
      Data.Object.LoadJSON(() => {
        cb();
      });
    }

    static LoadJSON(cb: () => void):void {
      Data.JSONLoader.Exec('jail/json/bodySpawn.json', (data: Array<any>) => {
        Data.Object.bodiesSpawn = data;

        Data.JSONLoader.Exec('jail/json/orderSpawn.json', (data: Array<any>) => {
          Data.Object.ordersSpawn = data;

          Data.JSONLoader.Exec('jail/json/loadBodies.json', (data: Array<any>) => {
            Data.Object.bodies = data;

            Data.JSONLoader.Exec('jail/json/loadElements.json', (data: Array<any>) => {
              Data.Object.humanParts = data;
              cb();
            });
          });
        });
      });
    }
  }
}
