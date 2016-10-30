var Loader = (function () {
    function Loader() {
    }
    Loader.prototype.Exec = function (cb) {
        Data.Images.Load(function () {
            Data.Sounds.Load(function () {
                cb();
            });
        });
    };
    return Loader;
}());
//# sourceMappingURL=Loader.js.map