/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteMovable = (function (_super) {
    __extends(SpriteMovable, _super);
    function SpriteMovable(x, y, zone) {
        _super.call(this, x, y, zone);
        this.x = x;
        this.y = y;
        this.zone = zone;
    }
    SpriteMovable.prototype.Update = function () {
        console.log("Update");
    };
    return SpriteMovable;
})(Sprite);
//# sourceMappingURL=SpriteMovable.js.map