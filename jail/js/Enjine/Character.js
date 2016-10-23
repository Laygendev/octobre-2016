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
            _this.colliders["top"] = new CharacterCollider(data['top']);
            _this.colliders["bottom"] = new CharacterCollider(data['bottom']);
            _this.colliders["left"] = new CharacterCollider(data['left']);
            _this.colliders["right"] = new CharacterCollider(data['right']);
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
    Character.prototype.UpdateCollider = function (spriteManager, listSprite) {
        for (var key in this.colliders) {
            var contactInfo = this.colliders[key].CheckCollider(this, listSprite, key);
            if (contactInfo && contactInfo.sprite) {
                console.log(contactInfo);
                spriteManager.Remove(contactInfo.sprite);
                contactInfo.sprite.SetPos(0, 0);
                var offsetPos = {
                    x: contactInfo.sprite.zone.collider[contactInfo.zone].x,
                    y: contactInfo.sprite.zone.collider[contactInfo.zone].y
                };
                switch (contactInfo.zone) {
                    case "top":
                        offsetPos.y += this.childs[0].zone.height / 2;
                        break;
                    case "bottom":
                        offsetPos.y -= this.childs[0].zone.height / 2;
                        break;
                    case "left":
                        offsetPos.x -= this.childs[0].zone.width / 2;
                        break;
                    case "right":
                        offsetPos.x += this.childs[0].zone.width / 2;
                        break;
                    default:
                        break;
                }
                offsetPos.x *= -1;
                offsetPos.y *= -1;
                contactInfo.sprite.SetOffset(offsetPos);
                this.AddChild(contactInfo.sprite);
                this.RemoveCollider(contactInfo.zone);
                break;
            }
        }
    };
    Character.prototype.Draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        for (var key in this.childs) {
            this.childs[key].Draw(context);
        }
        context.restore();
    };
    Character.prototype.RemoveCollider = function (zoneName) {
        delete this.colliders[zoneName];
    };
    return Character;
}(Sprite));
//# sourceMappingURL=Character.js.map