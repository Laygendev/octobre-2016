var Order = (function () {
    function Order(spawnedTime, listSprite, pos) {
        this.spawnedTime = spawnedTime;
        this.listSprite = listSprite;
        this.pos = pos;
        this.done = false;
        this.character = undefined;
    }
    Order.prototype.Draw = function (context) {
        context.save();
        if (this.done) {
            context.globalAlpha = 1;
        }
        context.translate(this.pos.x, this.pos.y);
        for (var key in this.listSprite) {
            Helper.DrawImage.Draw(this.listSprite[key], context);
        }
        context.restore();
    };
    Order.prototype.Clear = function () {
        delete this.listSprite;
    };
    Order.prototype.SetCharacter = function (character) {
        this.character = character;
    };
    return Order;
}());
//# sourceMappingURL=Order.js.map