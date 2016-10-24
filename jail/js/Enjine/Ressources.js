/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var Data;
(function (Data) {
    var Ressources = (function () {
        function Ressources() {
        }
        Ressources.Load = function () {
            var _this = this;
            this.buttons['restart'] = new Image();
            this.buttons['restart'].src = 'jail/images/buttonRestart.png';
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
        Ressources.RandomHumanPart = function () {
            var partName = "head0";
            return partName;
        };
        Ressources.isLoaded = false;
        Ressources.buttons = [];
        return Ressources;
    })();
    Data.Ressources = Ressources;
})(Data || (Data = {}));
//# sourceMappingURL=Ressources.js.map