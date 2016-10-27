/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
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
    OrderManager.prototype.Clear = function () {
    };
    OrderManager.prototype.Add = function (order) {
        this.listOrder.push(order);
    };
    return OrderManager;
})();
//# sourceMappingURL=OrderManager.js.map