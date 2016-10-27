/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class OrderManager {
  listOrder: Array<Order> = [];
  constructor() {
    this.Init();
  }

  private Init():void { }

  public Draw(context: any):void {
    for(var key in this.listOrder) {
      this.listOrder[key].Draw(context);
    }
  }

  public Clear():void {
  }

  public Add(order: Order) {
    this.listOrder.push(order);
  }
}