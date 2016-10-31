/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class OrderManager {
  public listOrder: Array<Order> = [];
  constructor() {}

  public Draw(context: any):void {
    for(var key in this.listOrder) {
			context.save();

			context.translate(global.hWidth - 50, global.height - 140);
      context.globalAlpha = 0.7;
      context.scale(0.45, 0.45);

      this.listOrder[key].Draw(context);
			context.restore();
    }
  }

  public Clear():void {}

  public Add(order: Order) {
    Data.Sounds.PlaySound('orderPop', false);
    this.listOrder.push(order);
  }
}
