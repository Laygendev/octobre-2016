var Data;
(function (Data) {
    var Ressources = (function () {
        function Ressources() {
        }
        Ressources.Load = function () {
            var _this = this;
            this.LoadSpriteSheet(function (spriteSheet) {
                _this.spriteSheet = spriteSheet;
                Data.JSONLoader.Exec('jail/json/loadBodies.json', function (data) {
                    _this.bodies = data;
                    Data.JSONLoader.Exec('jail/json/loadElements.json', function (data) {
                        _this.humanPart = data;
                        _this.isLoaded = true;
                        SceneManager.Manager.SetScene(new MainScene());
                    });
                });
            });
        };
        Ressources.LoadSpriteSheet = function (callback) {
            var spriteSheet = new Image();
            spriteSheet.src = 'jail/images/elements.png';
            callback(spriteSheet);
        };
        Ressources.isLoaded = false;
        return Ressources;
    }());
    Data.Ressources = Ressources;
})(Data || (Data = {}));
//# sourceMappingURL=Ressources.js.map