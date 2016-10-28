var OrderManager = (function () {
    function OrderManager() {
        this.listOrder = [];
        this.Init();
    }
    OrderManager.prototype.Init = function () { };
    OrderManager.prototype.Draw = function (context) {
        for (var key in this.listOrder) {
            this.listOrder[key].Draw(context);
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
        this.listOrder.push(order);
    };
    return OrderManager;
}());
//# sourceMappingURL=OrderManager.js.map