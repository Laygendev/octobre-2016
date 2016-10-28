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
			let keyNumber: any = key;
			context.save();
			context.scale(0.45, 0.45);
			context.translate((150 * keyNumber) + 10, 10);
      this.listOrder[key].Draw(context);
			context.restore();
    }
  }

  public Remove(order: Order) {
    for (var key in this.listOrder) {
      if (this.listOrder[key] === order) {
        order.Clear();
      }
    }
  }

  public Clear():void {
  }

  public Add(order: Order) {
    Data.Sound.PlaySound('orderPop', false);
    this.listOrder.push(order);
  }
}
