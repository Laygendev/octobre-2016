var SpriteManager = (function () {
    function SpriteManager() {
        this.listSprite = { "body": [], "head": [], "leg": [], "arml": [], "armr": [], "buttons": [], "staticImage": [], "clickableImage": [] };
    }
    SpriteManager.prototype.Update = function (deltaTime) {
        for (var type in this.listSprite) {
            for (var key in this.listSprite[type]) {
                this.listSprite[type][key].Update(deltaTime);
            }
        }
    };
    SpriteManager.prototype.Draw = function (context) {
        for (var type in this.listSprite) {
            for (var key in this.listSprite[type]) {
                this.listSprite[type][key].Draw(context);
            }
        }
    };
    SpriteManager.prototype.Add = function (sprite) {
        if (sprite) {
            this.listSprite[sprite.type].push(sprite);
        }
    };
    SpriteManager.prototype.Remove = function (sprite) {
        for (var type in this.listSprite) {
            for (var i = 0; i < this.listSprite[type].length; i++) {
                if (this.listSprite[type][i] == sprite) {
                    this.listSprite[type].splice(i, 1);
                }
            }
        }
    };
    SpriteManager.prototype.Clear = function () {
    };
    SpriteManager.prototype.Resize = function () {
        for (var i = 0; i < this.listSprite["body"].length; i++) {
            this.listSprite["body"][i].Resize();
        }
    };
    return SpriteManager;
}());
//# sourceMappingURL=SpriteManager.js.map