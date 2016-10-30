var OrderManager = (function () {
    function OrderManager() {
        this.listOrder = [];
        this.Init();
    }
    OrderManager.prototype.Init = function () { };
    OrderManager.prototype.Draw = function (context) {
        for (var key in this.listOrder) {
            context.save();
            context.translate(global.size.width / 2 - 50, global.size.height - 150);
            context.globalAlpha = 0.7;
            context.scale(0.45, 0.45);
            this.listOrder[key].Draw(context);
            context.restore();
        }
    };
    OrderManager.prototype.Remove = function (order) {
        for (var key in this.listOrder) {
            if (this.listOrder[key] === order) {
                order.Clear();
            }
        }
    };
    OrderManager.prototype.Clear = function () {
    };
    OrderManager.prototype.Add = function (order) {
        Data.Sound.PlaySound('orderPop', false);
        this.listOrder.push(order);
    };
    OrderManager.prototype.Resize = function () {
        for (var key in this.listOrder) {
            for (var key in this.listOrder) {
            }
        }
    };
    return OrderManager;
}());
//# sourceMappingURL=OrderManager.js.map