/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var SpawnManager = (function () {
    function SpawnManager(spriteManager, time) {
        var _this = this;
        this.spriteManager = spriteManager;
        this.time = time;
        this.spriteGenerator = new SpriteGenerator();
        setInterval(function () { _this.Exec(); }, time);
    }
    SpawnManager.prototype.Exec = function () {
        var tmpSprite = this.spriteGenerator.Exec();
        this.spriteManager.Add(tmpSprite);
    };
    return SpawnManager;
})();
//# sourceMappingURL=SpawnManager.js.map