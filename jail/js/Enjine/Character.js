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
        this.angle = 0;
        this.speedAngle = 0.1;
        Data.JSONLoader.Exec('jail/json/characterCollider.json', function (data) {
            for (var key in data) {
                _this.characterColliders[key] = new CharacterCollider(data[key]);
            }
        });
    }
    Character.prototype.AddChild = function (child) {
        Data.Sounds.PlaySound('joinOk', false);
        this.childs[child["type"]] = child;
    };
    Character.prototype.Update = function () {
        this.x = EventMouse.Mouse.move.x;
        this.y = EventMouse.Mouse.move.y;
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
            this.angle -= this.speedAngle;
        }
        else if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
            this.angle += this.speedAngle;
        }
        for (var key in this.colliders) {
            this.colliders[key].Update(this.x, this.y, this.angle);
        }
    };
    Character.prototype.Draw = function (context) {
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
    Character.prototype.Clear = function () {
        delete this.colliders;
        this.angle = 0;
        this.speedAngle = 0;
        this.secondTime = 0;
    };
    return Character;
}());
//# sourceMappingURL=Character.js.map