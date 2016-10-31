var Data;
(function (Data) {
    var Object = (function () {
        function Object() {
        }
        Object.Load = function (cb) {
            Data.Object.LoadJSON(function () {
                cb();
            });
        };
        Object.LoadJSON = function (cb) {
            Data.JSONLoader.Exec('jail/json/bodySpawn.json', function (data) {
                Data.Object.bodiesSpawn = data;
                Data.JSONLoader.Exec('jail/json/orderSpawn.json', function (data) {
                    Data.Object.ordersSpawn = data;
                    Data.JSONLoader.Exec('jail/json/loadBodies.json', function (data) {
                        Data.Object.bodies = data;
                        Data.JSONLoader.Exec('jail/json/loadElements.json', function (data) {
                            Data.Object.humanParts = data;
                            cb();
                        });
                    });
                });
            });
        };
        Object.bodies = undefined;
        Object.humanParts = undefined;
        Object.bodiesSpawn = undefined;
        Object.ordersSpawn = undefined;
        return Object;
    }());
    Data.Object = Object;
})(Data || (Data = {}));
//# sourceMappingURL=JSON.js.map