var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteMovable = (function (_super) {
    __extends(SpriteMovable, _super);
    function SpriteMovable(image, name, type, pos, zone, speed, angle, speedAngle) {
        var _this = this;
        _super.call(this, image, name, type, zone);
        this.image = image;
        this.name = name;
        this.type = type;
        this.pos = pos;
        this.zone = zone;
        this.speed = speed;
        this.angle = angle;
        this.speedAngle = speedAngle;
        this.timeOut = 2000;
        this.inScreen = false;
        this.pointsCollider = [];
        setTimeout(function () { _this.inScreen = true; }, this.timeOut);
    }
    SpriteMovable.prototype.Update = function () {
        this.pos.x = this.pos.x + this.speed * Math.cos(this.angle);
        this.pos.y = this.pos.y + this.speed * Math.sin(this.angle);
        this.angle += this.speedAngle;
        if (this.inScreen && (this.pos.x < -50 || this.pos.x > global.size.width + 50 || this.pos.y < -50 || this.pos.y > global.size.height + 50)) {
            if (this.spriteManager) {
                this.spriteManager.Remove(this);
            }
            this.Clear();
        }
        for (var key in this.pointsCollider) {
            this.pointsCollider[key].Update(this.pos, this.angle);
        }
    };
    SpriteMovable.prototype.Draw = function (context) {
        context.save();
        context.translate(this.pos.x, this.pos.y);
        context.rotate(this.angle);
        context.drawImage(this.image, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -(this.zone.width / 2) + this.offset.x, -(this.zone.height / 2) + this.offset.y, this.zone.width, this.zone.height);
        context.restore();
        for (var key in this.pointsCollider) {
            this.pointsCollider[key].Draw(context);
        }
    };
    SpriteMovable.prototype.Clear = function () {
    };
    return SpriteMovable;
}(Sprite));
//# sourceMappingURL=SpriteMovable.js.map