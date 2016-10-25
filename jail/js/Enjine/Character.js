var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(mainScene, x, y, zone) {
        var _this = _super.call(this, x, y, zone, 'body') || this;
        _this.mainScene = mainScene;
        _this.x = x;
        _this.y = y;
        _this.zone = zone;
        _this.childs = { 'head': [], 'body': [], 'arm': [], 'leg': [] };
        _this.colliders = [];
        _this.angle = 0;
        _this.speedAngle = 0.5;
        return _this;
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
        this.childs[child["type"]].push(child);
    };
    Character.prototype.Update = function () {
        this.x = EventMouse.Mouse.move.x;
        this.y = EventMouse.Mouse.move.y;
        console.log(EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left));
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left)) {
            this.angle -= this.speedAngle;
        }
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right)) {
            this.angle += this.speedAngle;
        }
        for (var key in this.colliders) {
            this.colliders[key].Update(this.x, this.y, this.angle);
        }
    };
    Character.prototype.UpdateCollider = function (spriteManager, listSprite) {
        for (var key in this.colliders) {
            var contactInfo = this.colliders[key].CheckCollider(this, listSprite, key);
            if (contactInfo && contactInfo.sprite) {
                if (contactInfo.valide) {
                    spriteManager.Remove(contactInfo.sprite);
                    contactInfo.sprite.SetPos(0, 0);
                    var offsetPos = {
                        x: contactInfo.sprite.zone.collider[contactInfo.zoneElement].x,
                        y: contactInfo.sprite.zone.collider[contactInfo.zoneElement].y
                    };
                    switch (contactInfo.zoneCharacter) {
                        case "top":
                            offsetPos.y += this.childs['body'][0].zone.height / 2;
                            break;
                        case "bottom":
                            offsetPos.y -= this.childs['body'][0].zone.height / 2;
                            break;
                        case "left":
                            offsetPos.x -= this.childs['body'][0].zone.width / 2;
                            break;
                        case "right":
                            offsetPos.x += this.childs['body'][0].zone.width / 2;
                            break;
                        default:
                            break;
                    }
                    offsetPos.x *= -1;
                    offsetPos.y *= -1;
                    contactInfo.sprite.SetOffset(offsetPos);
                    this.AddChild(contactInfo.sprite);
                    this.RemoveCollider(contactInfo.zoneCharacter);
                }
                else {
                    this.mainScene.ChangeScene(true);
                }
                break;
            }
        }
    };
    Character.prototype.Draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        for (var type in this.childs) {
            for (var key in this.childs[type]) {
                this.childs[type][key].Draw(context);
            }
        }
        context.restore();
        for (var key in this.colliders) {
            this.colliders[key].Draw(context);
        }
    };
    Character.prototype.RemoveCollider = function (zoneName) {
        delete this.colliders[zoneName];
    };
    Character.prototype.CheckElement = function () {
        if (this.childs['head'].length > 0 && this.childs['body'].length > 0 && this.childs['arm'].length > 1 && this.childs['leg'].length > 0) {
            return true;
        }
        return false;
    };
    return Character;
}(Sprite));
//# sourceMappingURL=Character.js.map