var Order = (function () {
    function Order(spawnedTime, listSprite) {
        this.spawnedTime = spawnedTime;
        this.listSprite = listSprite;
        this.done = false;
        this.character = undefined;
        console.log(this.listSprite);
    }
    Order.prototype.Draw = function (context) {
        for (var key in this.listSprite) {
            Helper.DrawImage.Draw(this.listSprite[key]);
        }
    };
    Order.prototype.Clear = function () {
    };
    Order.prototype.SetCharacter = function (character) {
        this.character = character;
    };
    return Order;
}());
//# sourceMappingURL=Order.js.map