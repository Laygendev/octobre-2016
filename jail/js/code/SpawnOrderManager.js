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
                    this.orderManager.Add(new Order(currentTime, this.jsonLevel[currentTime][key][x], Data.Ressources.RandomPosOrder()));
                    for (var i in this.jsonLevel[currentTime][key][x]) {
                        this.CreateOrder(this.jsonLevel[currentTime][key][x][i]);
                        this.CreateOrderAfter(this.jsonLevel[currentTime][key][x][i], 5000);
                    }
                }
            }
        }
    };
    SpawnOrderManager.prototype.CreateOrder = function (data) {
        var spriteMovable = this.spriteGenerator.Exec(data);
        if (!spriteMovable) {
            var posBody = Data.Ressources.RandomPosBody();
            var spriteClickable = new SpriteClickable(undefined, global.size.width / 2 + posBody.x, global.size.height + posBody.y, Data.Ressources.bodies[data], "body", data);
            spriteClickable.angle = posBody.angle;
            spriteClickable.SetSpriteManager(this.spriteManager);
            this.spriteManager.Add(spriteClickable);
        }
        else {
            spriteMovable.SetSpriteManager(this.spriteManager);
            this.spriteManager.Add(spriteMovable);
        }
    };
    SpawnOrderManager.prototype.CreateOrderAfter = function (data, time) {
        var _this = this;
        setTimeout(function () { _this.CreateOrder(data); }, time);
    };
    SpawnOrderManager.prototype.Clear = function () {
        delete this.jsonLevel;
        this.spriteGenerator.Clear();
        delete this.spriteGenerator;
    };
    return SpawnOrderManager;
}());
//# sourceMappingURL=SpawnOrderManager.js.map