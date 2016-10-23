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
            for (var key in this.zone.collider) {
                this.colliderPoint = new ColliderPoint(this.zone.collider[key].x, this.zone.collider[key].y);
            }
        }
    };
    Sprite.prototype.Update = function () {
        this.colliderPoint.Update(this.x, this.y);
    };
    Sprite.prototype.Draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.drawImage(Data.Ressources.spriteSheet, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -(this.zone.width / 2) + this.offset.x, -(this.zone.height / 2) + this.offset.y, this.zone.width, this.zone.height);
        context.restore();
        if (this.colliderPoint) {
            this.colliderPoint.Draw(context);
        }
    };
    Sprite.prototype.Clear = function () {
        this.colliderPoint.Clear();
        delete this.offset;
        delete this.zone;
    };
    Sprite.prototype.SetPos = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Sprite.prototype.SetOffset = function (offset) {
        this.offset = offset;
    };
    return Sprite;
}());
//# sourceMappingURL=Sprite.js.map