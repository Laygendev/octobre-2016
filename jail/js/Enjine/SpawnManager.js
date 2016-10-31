var SpawnManager = (function () {
    function SpawnManager(spriteManager, time) {
        var _this = this;
        this.spriteManager = spriteManager;
        this.time = time;
        this.spriteGenerator = new SpriteGenerator();
        this.intervalExec = undefined;
        this.intervalBody = undefined;
        this.intervalExec = setInterval(function () { _this.Exec(); }, time);
        this.intervalBody = setInterval(function () { _this.ExecBody(); }, time * 3);
    }
    SpawnManager.prototype.Exec = function () {
        var tmpSprite = this.spriteGenerator.Exec(undefined);
    };
    SpawnManager.prototype.ExecBody = function () {
    };
    SpawnManager.prototype.Clear = function () {
    };
    return SpawnManager;
}());
//# sourceMappingURL=SpawnManager.js.map