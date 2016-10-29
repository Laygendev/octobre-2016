var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteClickable = (function (_super) {
    __extends(SpriteClickable, _super);
    function SpriteClickable(image, x, y, zone, type, name) {
        _super.call(this, x, y, zone, type, name);
        this.image = image;
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.type = type;
        this.name = name;
        this.speedAngle = 0.01;
        this.angle = 0;
    }
    SpriteClickable.prototype.Update = function () {
        if (this.image == undefined) {
        }
    };
    SpriteClickable.prototype.Draw = function (context) {
        if (this.image != undefined) {
            context.drawImage(this.image, this.x, this.y);
        }
        else {
            context.save();
            context.translate(this.x + (this.zone.width / 2), this.y + (this.zone.height / 2));
            context.rotate(this.angle);
            context.drawImage(Data.Ressources.spriteSheet, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -(this.zone.width / 2), -(this.zone.height / 2), this.zone.width, this.zone.height);
            context.restore();
        }
    };
    SpriteClickable.prototype.MouseIn = function () {
        if (EventMouse.Mouse.move.x > this.x && EventMouse.Mouse.move.x < this.x + this.zone.width &&
            EventMouse.Mouse.move.y > this.y && EventMouse.Mouse.move.y < this.y + this.zone.height) {
        }
        else {
        }
    };
    SpriteClickable.prototype.ClickIn = function () {
        if (EventMouse.Mouse.isClicked &&
            EventMouse.Mouse.click.x > this.x && EventMouse.Mouse.click.x < this.x + this.zone.width &&
            EventMouse.Mouse.click.y > this.y && EventMouse.Mouse.click.y < this.y + this.zone.height) {
            return true;
        }
        return false;
    };
    return SpriteClickable;
}(Sprite));
//# sourceMappingURL=SpriteClickable.js.map