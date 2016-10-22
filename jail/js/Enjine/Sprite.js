var Sprite = (function () {
    function Sprite(x, y, zone) {
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.offset = { x: 0, y: 0 };
        this.colliderPoint = undefined;
        this.Init();
    }
    Sprite.prototype.Init = function () {
        if (this.zone.collider) {
            console.log(this.zone);
            this.colliderPoint = new ColliderPoint(this.zone.collider.top.x, this.zone.collider.top.y);
        }
    };
    Sprite.prototype.Update = function () {
        this.colliderPoint.Update(this.x, this.y);
    };
    Sprite.prototype.Draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.drawImage(Data.Ressources.spriteSheet, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -(this.zone.width / 2), -(this.zone.height / 2), this.zone.width, this.zone.height);
        context.restore();
        if (this.colliderPoint) {
            this.colliderPoint.Draw(context);
        }
    };
    Sprite.prototype.SetOffset = function (offset) {
        this.offset = offset;
    };
    return Sprite;
}());
//# sourceMappingURL=Sprite.js.map