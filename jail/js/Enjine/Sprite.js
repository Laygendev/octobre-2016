var Sprite = (function () {
    function Sprite(image, name, type, pos) {
        this.image = image;
        this.name = name;
        this.type = type;
        this.pos = pos;
        this.offset = { x: 0, y: 0 };
        this.spriteManager = undefined;
        this.scale = {
            x: 1.0,
            y: 1.0
        };
        this.basePos = { x: 0, y: 0 };
    }
    Sprite.prototype.Update = function (deltaTime) { };
    Sprite.prototype.Draw = function (context) { };
    Sprite.prototype.Clear = function () {
        delete this.offset;
    };
    return Sprite;
}());
//# sourceMappingURL=Sprite.js.map