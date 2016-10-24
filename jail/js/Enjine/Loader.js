/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var Loader = (function () {
    function Loader() {
        this.StartLoad();
    }
    Loader.prototype.StartLoad = function () {
        Data.Ressources.Load();
    };
    return Loader;
})();
//# sourceMappingURL=Loader.js.map