/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var Data;
(function (Data) {
    var JSONLoader = (function () {
        function JSONLoader() {
        }
        JSONLoader.Exec = function (pathFile, callback) {
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
        return JSONLoader;
    })();
    Data.JSONLoader = JSONLoader;
})(Data || (Data = {}));
//# sourceMappingURL=JSON.js.map