var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(x, y, zone) {
        _super.call(this, x, y, zone);
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.childs = [];
    }
    Character.prototype.Init = function () {
    };
    Character.prototype.AddChild = function (child) {
        this.childs.push(child);
    };
    Character.prototype.Update = function () {
        this.x = EventMouse.Mouse.move.x;
        this.y = EventMouse.Mouse.move.y;
    };
    Character.prototype.Draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        for (var key in this.childs) {
            this.childs[key].Draw(context);
        }
        context.restore();
    };
    return Character;
}(Sprite));
//# sourceMappingURL=Character.js.map