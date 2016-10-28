var Loader = (function () {
    function Loader() {
        this.StartLoad();
    }
    Loader.prototype.StartLoad = function () {
        Data.Ressources.Load(function () {
            Data.Sound.Load();
        });
    };
    return Loader;
}());
//# sourceMappingURL=Loader.js.map