var Order = (function () {
    function Order(listHumanPartKey) {
        this.listHumanPartKey = listHumanPartKey;
        this.done = false;
        this.character = undefined;
        this.pos = { x: 0, y: 0 };
        this.pos = Helper.Order.RandomPosOrder();
    }
    Order.prototype.Draw = function (context) {
        context.save();
        if (this.done) {
            context.globalAlpha = 1;
        }
        context.translate(this.pos.x, this.pos.y);
        for (var key in this.listHumanPartKey) {
            Helper.DrawImage.Draw(this.listHumanPartKey[key], context);
        }
        context.restore();
    };
    Order.prototype.Clear = function () {
        delete this.listHumanPartKey;
    };
    Order.prototype.SetCharacter = function (character) {
        this.done = true;
        this.character = character;
    };
    return Order;
}());
//# sourceMappingURL=Order.js.map