/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class OrderManager {
  listOrder: Array<Order> = [];
  constructor() {}

  public Draw(context: any):void {

    for(var key in this.listOrder) {
			context.save();
			context.translate(global.size.width / 2 - 50, global.size.height - 150);
      context.globalAlpha = 0.7;
      context.scale(0.45, 0.45);
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
    Data.Sounds.PlaySound('orderPop', false);
    this.listOrder.push(order);
  }

  public Resize():void {
    for (var key in this.listOrder) {
      for(var key in this.listOrder) {
      }
    }
  }
}
