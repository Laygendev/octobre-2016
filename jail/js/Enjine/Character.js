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
    Character.prototype.AddChild = function (child) {
        var type = child["type"];
        Data.Sounds.PlaySound('joinOk', false);
        this.childs[type] = child;
    };
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
            this.characterColliders[key].Update(this.pos, this.angle);
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
    Character.prototype.RemoveCollider = function (zoneName) {
        delete this.characterColliders[zoneName];
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
    return Character;
}());
//# sourceMappingURL=Character.js.map