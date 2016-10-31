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
    }
    SpriteSheet.prototype.Update = function () {
    };
    SpriteSheet.prototype.Draw = function (context) {
    };
    SpriteSheet.prototype.Clear = function () { };
    return SpriteSheet;
}(Sprite));
//# sourceMappingURL=SpriteSheet.js.map