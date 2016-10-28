var OrderGroup = (function () {
    function OrderGroup() {
        this.done = false;
        this.listOrder = [];
    }
    OrderGroup.prototype.Add = function (order) {
        this.listOrder.push(order);
    };
    return OrderGroup;
}());
//# sourceMappingURL=OrderGroup.js.map