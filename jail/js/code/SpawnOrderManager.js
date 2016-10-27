/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
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
            this.orderManager.Add(new Order(currentTime, this.jsonLevel[currentTime]));
            for (var key in this.jsonLevel[currentTime]) {
                var spriteMovable = this.spriteGenerator.Exec(this.jsonLevel[currentTime][key]);
                if (!spriteMovable) {
                    spriteMovable = new SpriteMovableAndClickable(global.size.width, global.size.height - 100, Data.Ressources.bodies[this.jsonLevel[currentTime][key]], "body", -1, 0, 0, this.jsonLevel[currentTime][key]);
                }
                this.spriteManager.Add(spriteMovable);
            }
        }
    };
    return SpawnOrderManager;
})();
//# sourceMappingURL=SpawnOrderManager.js.map