var SpriteManager = (function () {
    function SpriteManager() {
        this.listSprite = [];
    }
    SpriteManager.prototype.Init = function () {
    };
    SpriteManager.prototype.Update = function () {
        for (var key in this.listSprite) {
            this.listSprite[key].Update();
        }
    };
    SpriteManager.prototype.Draw = function (context) {
        for (var key in this.listSprite) {
            this.listSprite[key].Draw(context);
        }
    };
    SpriteManager.prototype.Add = function (sprite) {
        this.listSprite.push(sprite);
    };
    return SpriteManager;
}());
//# sourceMappingURL=SpriteManager.js.map