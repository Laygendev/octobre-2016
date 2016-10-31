var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteClickable = (function (_super) {
    __extends(SpriteClickable, _super);
    function SpriteClickable(image, name, type, pos, zoneClickable) {
        _super.call(this, image, name, type, pos);
        this.image = image;
        this.name = name;
        this.type = type;
        this.pos = pos;
        this.zoneClickable = zoneClickable;
        this.speedAngle = 0.01;
        this.angle = 0;
        this.currentImage = this.image;
    }
    SpriteClickable.prototype.Update = function (deltaTime) { };
    SpriteClickable.prototype.Draw = function (context) {
        if (this.image != undefined) {
            context.drawImage(this.currentImage, this.pos.x, this.pos.y);
        }
    };
    SpriteClickable.prototype.ClickIn = function () {
        if (EventMouse.Mouse.isClicked &&
            EventMouse.Mouse.click.x > this.pos.x && EventMouse.Mouse.click.x < this.pos.x + this.zoneClickable.width &&
            EventMouse.Mouse.click.y > this.pos.y && EventMouse.Mouse.click.y < this.pos.y + this.zoneClickable.height) {
            return true;
        }
        return false;
    };
    SpriteClickable.prototype.Clear = function () {
    };
    return SpriteClickable;
}(Sprite));
//# sourceMappingURL=SpriteClickable.js.map