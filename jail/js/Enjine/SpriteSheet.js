var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteSheet = (function (_super) {
    __extends(SpriteSheet, _super);
    function SpriteSheet(name, type, pos, zone) {
        _super.call(this, name, type, pos, zone);
        this.name = name;
        this.type = type;
        this.pos = pos;
        this.zone = zone;
        console.log(this.zone);
    }
    SpriteSheet.prototype.Update = function () {
    };
    SpriteSheet.prototype.Draw = function (context) {
        context.save();
        context.translate(this.pos.x, this.pos.y);
        context.scale(this.scale.x, this.scale.y);
        context.drawImage(Data.Images.spriteSheet, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -(this.zone.width / 2) + this.offset.x, -(this.zone.height / 2) + this.offset.y, this.zone.width, this.zone.height);
        context.restore();
    };
    SpriteSheet.prototype.Clear = function () { };
    return SpriteSheet;
}(Sprite));
//# sourceMappingURL=SpriteSheet.js.map