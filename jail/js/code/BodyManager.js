var BodyManager = (function () {
    function BodyManager() {
        this.bodies = [];
        this.numberSprite = 0;
    }
    BodyManager.prototype.Update = function (deltaTime) {
        for (var key in this.bodies) {
            this.bodies[key].Update(deltaTime);
        }
    };
    BodyManager.prototype.Draw = function (context) {
        for (var key in this.bodies) {
            this.bodies[key].Draw(context);
        }
    };
    BodyManager.prototype.Add = function (sprite) {
        if (sprite) {
            this.bodies.push(sprite);
        }
    };
    BodyManager.prototype.Remove = function (sprite) {
        for (var key in this.bodies) {
            if (this.bodies[key] == sprite) {
                var aKey = key;
                sprite.Clear();
                this.bodies.splice(aKey, 1);
            }
        }
    };
    BodyManager.prototype.Clear = function () { };
    return BodyManager;
}());
//# sourceMappingURL=BodyManager.js.map