/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(mainScene, x, y, zone, name) {
        _super.call(this, x, y, zone, 'body', 'character');
        this.mainScene = mainScene;
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.name = name;
        this.childs = { 'head': undefined, 'body': undefined, 'arml': undefined, 'armr': undefined, 'leg': undefined };
        this.colliders = [];
        this.angle = 0;
        this.speedAngle = 0.1;
        this.secondTime = 0;
        this.timeForDelivery = 2;
        this.interval = undefined;
        this.currentAction = "";
        this.can = {
            delivery: false,
            delete: false
        };
    }
    Character.prototype.Init = function () {
        var _this = this;
        Data.JSONLoader.Exec('jail/json/characterCollider.json', function (data) {
            _this.colliders["top"] = new CharacterCollider(data['top']);
            _this.colliders["bottom"] = new CharacterCollider(data['bottom']);
            _this.colliders["left"] = new CharacterCollider(data['left']);
            _this.colliders["right"] = new CharacterCollider(data['right']);
        });
    };
    Character.prototype.AddChild = function (child) {
        this.childs[child["type"]] = child;
    };
    Character.prototype.Update = function () {
        var _this = this;
        this.x = EventMouse.Mouse.move.x;
        this.y = EventMouse.Mouse.move.y;
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
            this.angle -= this.speedAngle;
            this.currentAction = "left";
        }
        else if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
            this.angle += this.speedAngle;
            this.currentAction = "right";
        }
        else {
            this.currentAction = "";
        }
        if (this.currentAction != "") {
            if (!this.interval) {
                this.interval = setInterval(function () { _this.WaitForDelivery(_this.currentAction); }, 1000);
            }
        }
        else {
            clearInterval(this.interval);
            this.interval = undefined;
            this.secondTime = 0;
            this.can.delivery = false;
            this.can.delete = false;
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
                            offsetPos.y += this.childs['body'].zone.height / 2;
                            break;
                        case "bottom":
                            offsetPos.y -= this.childs['body'].zone.height / 2;
                            break;
                        case "left":
                            offsetPos.x -= this.childs['body'].zone.width / 2;
                            break;
                        case "right":
                            offsetPos.x += this.childs['body'].zone.width / 2;
                            break;
                        default:
                            break;
                    }
                    offsetPos.x *= -1;
                    offsetPos.y *= -1;
                    contactInfo.sprite.SetOffset(offsetPos);
                    this.AddChild(contactInfo.sprite);
                    contactInfo.sprite.angle = 0;
                    this.RemoveCollider(contactInfo.zoneCharacter);
                }
                else {
                }
                break;
            }
        }
    };
    Character.prototype.Draw = function (context) {
        context.font = "30px Source Sans Pro Bold";
        context.fillText("Actions dans: " + (this.secondTime), (global.size.width - 300), 50);
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        for (var key in this.childs) {
            if (this.childs[key]) {
                this.childs[key].Draw(context);
            }
        }
        context.restore();
    };
    Character.prototype.RemoveCollider = function (zoneName) {
        delete this.colliders[zoneName];
    };
    Character.prototype.CheckElement = function (orderManager) {
        var found = true;
        var foundI = 0;
        for (var i in orderManager.listOrder) {
            found = orderManager.listOrder[i];
            for (var key in this.childs) {
                if (this.childs[key]) {
                    if (orderManager.listOrder[i].listSprite.indexOf(this.childs[key].name) == -1) {
                        found = false;
                    }
                }
                else {
                    found = false;
                }
            }
            if (found) {
                var iNumber = i;
                orderManager.listOrder.splice(iNumber, 1);
                orderManager.Remove(found);
                return found;
            }
        }
        return false;
    };
    Character.prototype.WaitForDelivery = function (direction) {
        this.secondTime += 1;
        if (this.secondTime >= this.timeForDelivery) {
            if (direction == "left") {
                this.can.delivery = true;
            }
            else {
                this.can.delete = true;
            }
        }
    };
    Character.prototype.Clear = function () {
        delete this.childs.head;
        delete this.childs.body;
        delete this.childs.arm;
        delete this.childs.leg;
        delete this.colliders;
        this.angle = 0;
        this.speedAngle = 0;
        this.secondTime = 0;
        this.timeForDelivery = 5;
        if (this.interval) {
            clearInterval(this.interval);
        }
        delete this.interval;
        delete this.can.delivery;
        delete this.can.delete;
    };
    return Character;
})(Sprite);
//# sourceMappingURL=Character.js.map