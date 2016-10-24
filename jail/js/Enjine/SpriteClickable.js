var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteClickable = (function (_super) {
    __extends(SpriteClickable, _super);
    function SpriteClickable(image, x, y, zone, type) {
        var _this = _super.call(this, x, y, zone, type) || this;
        _this.image = image;
        _this.x = x;
        _this.y = y;
        _this.zone = zone;
        _this.type = type;
        return _this;
    }
    SpriteClickable.prototype.Update = function () {
    };
    SpriteClickable.prototype.Draw = function (context) {
        context.drawImage(this.image, this.x, this.y);
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