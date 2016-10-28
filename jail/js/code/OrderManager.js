var OrderManager = (function () {
    function OrderManager() {
        this.listOrder = [];
        this.Init();
    }
    OrderManager.prototype.Init = function () { };
    OrderManager.prototype.Draw = function (context) {
        for (var key in this.listOrder) {
            var keyNumber = key;
            context.save();
            context.scale(0.45, 0.45);
            context.translate((150 * keyNumber) + 10, 10);
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
    return OrderManager;
}());
//# sourceMappingURL=OrderManager.js.map