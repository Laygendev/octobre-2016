var SpriteManager = (function () {
    function SpriteManager() {
        this.listSprite = { "body": [], "head": [], "leg": [], "arml": [], "armr": [], "button": [], "staticImage": [] };
        this.numberSprite = 0;
    }
    SpriteManager.prototype.Init = function () {
    };
    SpriteManager.prototype.Update = function () {
        for (var type in this.listSprite) {
            for (var key in this.listSprite[type]) {
                this.listSprite[type][key].Update();
                if (this.listSprite[type][key] && this.listSprite[type][key].type && this.listSprite[type][key].type == "body" && this.listSprite[type][key].ClickIn()) {
                    var keyElement = this.listSprite[type][key];
                    this.Remove(this.listSprite[type][key]);
                    return keyElement.name;
                }
            }
        }
        return undefined;
    };
    SpriteManager.prototype.Draw = function (context) {
        context.font = "12px Source Sans Pro Bold";
        context.fillText("Sprite: " + this.numberSprite, global.size.width - 50, 50);
        for (var type in this.listSprite) {
            for (var key in this.listSprite[type]) {
                this.listSprite[type][key].Draw(context);
            }
        }
    };
    SpriteManager.prototype.Add = function (sprite) {
        if (sprite) {
            this.numberSprite++;
            this.listSprite[sprite.type].push(sprite);
        }
    };
    SpriteManager.prototype.Remove = function (sprite) {
        for (var type in this.listSprite) {
            for (var i = 0; i < this.listSprite[type].length; i++) {
                if (this.listSprite[type][i] == sprite) {
                    this.listSprite[type].splice(i, 1);
                    this.numberSprite--;
                }
            }
        }
    };
    SpriteManager.prototype.Clear = function () {
    };
    return SpriteManager;
}());
//# sourceMappingURL=SpriteManager.js.map