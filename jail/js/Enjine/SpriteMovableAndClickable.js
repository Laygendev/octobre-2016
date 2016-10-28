var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteMovableAndClickable = (function (_super) {
    __extends(SpriteMovableAndClickable, _super);
    function SpriteMovableAndClickable(x, y, zone, zoneType, speed, angle, speedAngle, name) {
        _super.call(this, x, y, zone, zoneType, name);
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.speed = speed;
        this.angle = angle;
        this.speedAngle = speedAngle;
        this.name = name;
    }
    SpriteMovableAndClickable.prototype.Update = function () {
        this.x = this.x + this.speed * Math.cos(this.angle);
        this.y = this.y + this.speed * Math.sin(this.angle);
        this.angle += this.speedAngle;
        for (var key in this.colliderPoint) {
            this.colliderPoint[key].Update(this.x, this.y, this.angle);
        }
    };
    SpriteMovableAndClickable.prototype.Draw = function (context) {
        context.save();
        context.drawImage(Data.Ressources.spriteSheet, this.zone.x, this.zone.y, this.zone.width, this.zone.height, this.x, this.y, this.zone.width, this.zone.height);
    };
    SpriteMovableAndClickable.prototype.MouseIn = function () {
        if (EventMouse.Mouse.move.x > this.x && EventMouse.Mouse.move.x < this.x + this.zone.width &&
            EventMouse.Mouse.move.y > this.y && EventMouse.Mouse.move.y < this.y + this.zone.height) {
            this.speedAngle = 2;
        }
        else {
            this.speedAngle = 0.02;
        }
    };
    SpriteMovableAndClickable.prototype.ClickIn = function () {
        if (EventMouse.Mouse.isClicked &&
            EventMouse.Mouse.click.x > this.x && EventMouse.Mouse.click.x < this.x + this.zone.width &&
            EventMouse.Mouse.click.y > this.y && EventMouse.Mouse.click.y < this.y + this.zone.height) {
            return true;
        }
        return false;
    };
    return SpriteMovableAndClickable;
}(Sprite));
//# sourceMappingURL=SpriteMovableAndClickable.js.map