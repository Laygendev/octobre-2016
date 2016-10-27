/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var Order = (function () {
    function Order(spawnedTime, listSprite) {
        this.spawnedTime = spawnedTime;
        this.listSprite = listSprite;
        this.done = false;
        this.character = undefined;
    }
    Order.prototype.Draw = function (context) {
        context.save();
        context.scale(0.7, 0.7);
        var i = 0;
        for (var key in this.listSprite) {
            Helper.DrawImage.Draw(this.listSprite[key], context, 1 * (100 * i), 0);
            i++;
        }
        context.restore();
    };
    Order.prototype.Clear = function () {
    };
    Order.prototype.SetCharacter = function (character) {
        this.character = character;
    };
    return Order;
})();
//# sourceMappingURL=Order.js.map