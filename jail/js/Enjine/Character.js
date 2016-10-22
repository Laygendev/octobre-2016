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
        this.colliders = [];
    }
    Character.prototype.Init = function () {
        var _this = this;
        Data.JSONLoader.Exec('jail/json/characterCollider', function (data) {
            _this.colliders[0] = new CharacterCollider(data['top']);
        });
    };
    Character.prototype.AddChild = function (child) {
        this.childs.push(child);
    };
    Character.prototype.Update = function () {
        this.x = EventMouse.Mouse.move.x;
        this.y = EventMouse.Mouse.move.y;
        for (var key in this.colliders) {
            this.colliders[key].Update(this.x, this.y);
        }
    };
    Character.prototype.UpdateCollider = function (listSprite) {
        for (var key in this.colliders) {
            this.colliders[key].CheckCollider(listSprite);
        }
    };
    Character.prototype.Draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        for (var key in this.childs) {
            this.childs[key].Draw(context);
        }
        context.restore();
        for (var key in this.colliders) {
            this.colliders[key].Draw(context);
        }
    };
    return Character;
}(Sprite));
//# sourceMappingURL=Character.js.map