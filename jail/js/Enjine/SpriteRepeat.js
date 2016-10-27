/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteRepeat = (function (_super) {
    __extends(SpriteRepeat, _super);
    function SpriteRepeat(image, x, y, zone, repeat) {
        _super.call(this, x, y, undefined, "staticImage");
        this.image = image;
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.repeat = repeat;
    }
    SpriteRepeat.prototype.Update = function () {
    };
    SpriteRepeat.prototype.Draw = function (context) {
        if (this.image != undefined) {
            for (var i = this.x; i < global.size.width; i += this.zone.width) {
                context.drawImage(this.image, this.x + i, this.y);
            }
        }
    };
    return SpriteRepeat;
})(Sprite);
//# sourceMappingURL=SpriteRepeat.js.map