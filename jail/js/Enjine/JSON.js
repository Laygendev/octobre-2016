var Loader;
(function (Loader) {
    var JSON = (function () {
        function JSON() {
        }
        JSON.Exec = function (pathFile, callback) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', pathFile, true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == 200) {
                    if (callback) {
                        callback(JSON.parse(xobj.responseText));
                    }
                }
            };
            xobj.send(null);
        };
        return JSON;
    }());
    Loader.JSON = JSON;
})(Loader || (Loader = {}));
//# sourceMappingURL=JSON.js.map