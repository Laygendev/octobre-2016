var OrderManager = (function () {
    function OrderManager() {
        this.listOrder = [];
    }
    OrderManager.prototype.Draw = function (context) {
        for (var key in this.listOrder) {
            context.save();
            context.translate(global.hWidth - 50, global.height - 140);
            context.globalAlpha = 0.7;
            context.scale(0.45, 0.45);
            this.listOrder[key].Draw(context);
            context.restore();
        }
    };
    OrderManager.prototype.Clear = function () { };
    OrderManager.prototype.Add = function (order) {
        Data.Sounds.PlaySound('orderPop', false);
        this.listOrder.push(order);
    };
    return OrderManager;
}());
//# sourceMappingURL=OrderManager.js.map