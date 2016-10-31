var SpawnOrderManager = (function () {
    function SpawnOrderManager(pathToJson, orderManager, spawnManager) {
        var _this = this;
        this.pathToJson = pathToJson;
        this.orderManager = orderManager;
        this.spawnManager = spawnManager;
        this.jsonLevel = undefined;
        Data.JSONLoader.Exec(pathToJson, function (data) {
            _this.jsonLevel = data;
        });
    }
    SpawnOrderManager.prototype.Exec = function (currentTime) {
        if (this.jsonLevel[currentTime]) {
            var listKeyWithNoTime = [];
            for (var key in this.jsonLevel[currentTime]) {
                var keySplitted = this.jsonLevel[currentTime][key].split('_');
                listKeyWithNoTime.push(keySplitted[1]);
            }
            this.orderManager.Add(new Order(listKeyWithNoTime));
            this.spawnManager.Add(this.jsonLevel[currentTime]);
        }
    };
    SpawnOrderManager.prototype.Clear = function () {
        delete this.jsonLevel;
    };
    return SpawnOrderManager;
}());
//# sourceMappingURL=SpawnOrderManager.js.map