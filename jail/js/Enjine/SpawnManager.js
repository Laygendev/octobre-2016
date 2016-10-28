var SpawnManager = (function () {
    function SpawnManager(spriteManager, time) {
        var _this = this;
        this.spriteManager = spriteManager;
        this.time = time;
        this.spriteGenerator = new SpriteGenerator();
        setInterval(function () { _this.Exec(); }, time);
        setInterval(function () { _this.ExecBody(); }, time * 3);
    }
    SpawnManager.prototype.Exec = function () {
        var tmpSprite = this.spriteGenerator.Exec(undefined);
        tmpSprite.SetSpriteManager(this.spriteManager);
        this.spriteManager.Add(tmpSprite);
    };
    SpawnManager.prototype.ExecBody = function () {
        var tmpSprite = this.spriteGenerator.Exec(Data.Ressources.RandomBody());
        this.spriteManager.Add(tmpSprite);
    };
    return SpawnManager;
}());
//# sourceMappingURL=SpawnManager.js.map