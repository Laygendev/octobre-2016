var Sprite = (function () {
    function Sprite(x, y, zone) {
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.offset = { x: 0, y: 0 };
        this.Init();
    }
    Sprite.prototype.Init = function () {
    };
    Sprite.prototype.Update = function () {
        console.log("Update");
    };
    Sprite.prototype.Draw = function (context) {
        context.save();
        context.translate(this.x + this.zone.width / 2, this.y + this.zone.height / 2);
        context.drawImage(Data.Ressources.spriteSheet, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -((this.zone.width) + this.offset.x), -((this.zone.height) + this.offset.y), this.zone.width, this.zone.height);
        context.restore();
    };
    Sprite.prototype.SetOffset = function (offset) {
        this.offset = offset;
    };
    return Sprite;
}());
//# sourceMappingURL=Sprite.js.map