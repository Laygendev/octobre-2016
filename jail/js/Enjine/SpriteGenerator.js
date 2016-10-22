var SpriteGenerator = (function () {
    function SpriteGenerator() {
    }
    SpriteGenerator.prototype.Exec = function () {
        var pos = this.RandomPosition();
        return new Sprite(pos.x, pos.y, Data.Ressources.humanPart['head0']);
    };
    SpriteGenerator.prototype.RandomPosition = function () {
        return {
            x: 0,
            y: 0
        };
    };
    return SpriteGenerator;
}());
//# sourceMappingURL=SpriteGenerator.js.map