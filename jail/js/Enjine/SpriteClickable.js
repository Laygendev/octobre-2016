var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteClickable = (function (_super) {
    __extends(SpriteClickable, _super);
    function SpriteClickable(image, x, y, zone, type, name, imageHover) {
        var _this = _super.call(this, x, y, zone, type, name) || this;
        _this.image = image;
        _this.x = x;
        _this.y = y;
        _this.zone = zone;
        _this.type = type;
        _this.name = name;
        _this.imageHover = imageHover;
        _this.speedAngle = 0.01;
        _this.angle = 0;
        _this.currentImage = _this.image;
        return _this;
    }
    SpriteClickable.prototype.Update = function () {
        if (this.image != undefined) {
            this.MouseIn();
        }
    };
    SpriteClickable.prototype.Draw = function (context) {
        if (this.image != undefined) {
            context.drawImage(this.currentImage, this.x, this.y);
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
            if (this.imageHover) {
                this.currentImage = this.imageHover;
            }
        }
        else {
            this.currentImage = this.image;
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