var SpawnOrderManager = (function () {
    function SpawnOrderManager(orderManager, pathToJson) {
        var _this = this;
        this.orderManager = orderManager;
        this.pathToJson = pathToJson;
        this.jsonLevel = undefined;
        Data.JSONLoader.Exec(pathToJson, function (data) {
            _this.jsonLevel = data;
        });
    }
    SpawnOrderManager.prototype.Exec = function (currentTime) {
        if (this.jsonLevel[currentTime]) {
            this.orderManager.Add(new Order(currentTime, this.jsonLevel[currentTime]));
        }
    };
    return SpawnOrderManager;
}());
//# sourceMappingURL=SpawnOrderManager.js.map