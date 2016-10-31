var Helper;
(function (Helper) {
    var Order = (function () {
        function Order() {
        }
        Order.RandomPosOrder = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (Data.Object.ordersSpawn.length))) + Data.Object.ordersSpawn.length;
            var tmp = Data.Object.ordersSpawn[randomNumber];
            Data.Object.ordersSpawn.splice(randomNumber, 1);
            return tmp;
        };
        return Order;
    }());
    Helper.Order = Order;
})(Helper || (Helper = {}));
//# sourceMappingURL=Order.js.map