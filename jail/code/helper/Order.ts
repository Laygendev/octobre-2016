module Helper {
  export class Order {
    static RandomPosOrder():any {
      var randomNumber: number = Math.floor(Math.random() * (0 - (Data.Object.ordersSpawn.length))) + Data.Object.ordersSpawn.length;
      let tmp = Data.Object.ordersSpawn[randomNumber];
      Data.Object.ordersSpawn.splice(randomNumber, 1);
      return tmp;
    }
  }
}
