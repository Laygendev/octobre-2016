var Character = (function () {
    function Character() {
        var _this = this;
        this.childs = { 'head': undefined, 'body': undefined, 'arml': undefined, 'armr': undefined, 'leg': undefined };
        this.characterColliders = {
            "top": undefined,
            "bottom": undefined,
            "left": undefined,
            "right": undefined
        };
        this.pos = {
            x: 0,
            y: 0
        };
        this.angle = 0;
        this.speedAngle = 0.1;
        Data.JSONLoader.Exec('jail/json/characterCollider.json', function (data) {
            for (var key in data) {
                _this.characterColliders[key] = new CharacterCollider(data[key]);
            }
        });
    }
    Character.prototype.Update = function () {
        this.pos.x = EventMouse.Mouse.move.x;
        this.pos.y = EventMouse.Mouse.move.y;
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
            this.angle -= this.speedAngle;
        }
        else if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
            this.angle += this.speedAngle;
        }
        for (var key in this.characterColliders) {
            this.characterColliders[key].Update(this.pos, this.angle, key);
        }
    };
    Character.prototype.Draw = function (context) {
        context.save();
        context.translate(this.pos.x, this.pos.y);
        context.rotate(this.angle);
        for (var key in this.childs) {
            if (this.childs[key]) {
                this.childs[key].Draw(context);
            }
        }
        context.restore();
    };
    Character.prototype.Clear = function () {
        delete this.characterColliders;
        this.angle = 0;
        this.speedAngle = 0;
        this.pos.x = 0;
        this.pos.y = 0;
        delete this.pos;
        delete this.childs;
    };
    Character.prototype.AddChild = function (sprite) {
        var zone = Data.Object.bodies[sprite.name] ? Data.Object.bodies[sprite.name] : Data.Object.humanParts[sprite.name];
        sprite.SetZone(zone);
        this.childs[sprite.type] = sprite;
        Data.Sounds.PlaySound('joinOk', false);
    };
    Character.prototype.AddContactChild = function (contactInfos) {
        contactInfos.sprite.SetPos(0, 0);
        var offsetPos = {
            x: contactInfos.sprite.zone.collider[contactInfos.zoneElement].x,
            y: contactInfos.sprite.zone.collider[contactInfos.zoneElement].y
        };
        switch (contactInfos.zoneCharacter) {
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
        contactInfos.sprite.SetOffset(offsetPos);
        this.AddChild(contactInfos.sprite);
        contactInfos.sprite.angle = 0;
    };
    Character.prototype.RemoveCollider = function (zoneName) {
        delete this.characterColliders[zoneName];
    };
    Character.prototype.GoTrash = function () {
        SceneManager.Manager.currentScene.RemoveCharacter();
    };
    Character.prototype.Delivery = function () {
        SceneManager.Manager.currentScene.Delivery();
    };
    Character.prototype.CheckElement = function (orderManager) {
        var found = true;
        var foundI = 0;
        for (var i in orderManager.listOrder) {
            found = orderManager.listOrder[i];
            for (var key in this.childs) {
                if (this.childs[key]) {
                    if (orderManager.listOrder[i].listHumanPartKey.indexOf(this.childs[key].name) == -1) {
                        found = false;
                    }
                }
                else {
                    found = false;
                }
            }
            if (found) {
                var iNumber = i;
                found.done = true;
                return found;
            }
        }
        return false;
    };
    return Character;
}());
//# sourceMappingURL=Character.js.map