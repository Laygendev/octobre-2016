var SpawnOrderManager = (function () {
    function SpawnOrderManager(spriteManager, orderManager, pathToJson) {
        var _this = this;
        this.spriteManager = spriteManager;
        this.orderManager = orderManager;
        this.pathToJson = pathToJson;
        this.jsonLevel = undefined;
        this.spriteGenerator = new SpriteGenerator();
        Data.JSONLoader.Exec(pathToJson, function (data) {
            _this.jsonLevel = data;
        });
    }
    SpawnOrderManager.prototype.Exec = function (currentTime) {
        if (this.jsonLevel[currentTime]) {
            for (var key in this.jsonLevel[currentTime]) {
                for (var x in this.jsonLevel[currentTime][key]) {
                    this.orderManager.Add(new Order(this.jsonLevel[currentTime][key][x]));
                }
            }
        }
    };
    SpawnOrderManager.prototype.Clear = function () {
        delete this.jsonLevel;
        this.spriteGenerator.Clear();
        delete this.spriteGenerator;
    };
    return SpawnOrderManager;
}());
//# sourceMappingURL=SpawnOrderManager.js.map