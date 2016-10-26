var SpriteManager = (function () {
    function SpriteManager() {
        this.listSprite = { "body": [], "head": [], "leg": [], "arm": [], "button": [] };
    }
    SpriteManager.prototype.Init = function () {
    };
    SpriteManager.prototype.Update = function () {
        for (var type in this.listSprite) {
            for (var key in this.listSprite[type]) {
                this.listSprite[type][key].Update();
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
        this.listSprite[sprite.type].push(sprite);
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
    return SpriteManager;
}());
//# sourceMappingURL=SpriteManager.js.map