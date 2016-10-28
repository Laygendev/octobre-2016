var Data;
(function (Data) {
    var Ressources = (function () {
        function Ressources() {
        }
        Ressources.Load = function () {
            var _this = this;
            this.buttons['restart'] = new Image();
            this.buttons['restart'].src = 'jail/images/buttonRestart.png';
            this.staticImage['tapis'] = new Image();
            this.staticImage['tapis'].src = 'jail/images/tapis.png';
            this.LoadSpriteSheet(function (spriteSheet) {
                _this.spriteSheet = spriteSheet;
                Data.JSONLoader.Exec('jail/json/loadBodies.json', function (data) {
                    _this.bodies = data;
                    Data.JSONLoader.Exec('jail/json/loadElements.json', function (data) {
                        _this.humanPart = data;
                        for (var key in _this.humanPart) {
                            _this.numberHumanPart++;
                        }
                        _this.isLoaded = true;
                        SceneManager.Manager.SetScene(new Level11('body0'));
                    });
                });
            });
        };
        Ressources.LoadSpriteSheet = function (callback) {
            var spriteSheet = new Image();
            spriteSheet.src = 'jail/images/spritesheet.png';
            callback(spriteSheet);
        };
        Ressources.RandomHumanPart = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (this.numberHumanPart))) + this.numberHumanPart;
            var i = 0;
            for (var key in this.humanPart) {
                if (i == randomNumber) {
                    return key;
                }
                i++;
            }
            return undefined;
        };
        Ressources.isLoaded = false;
        Ressources.buttons = [];
        Ressources.numberHumanPart = 0;
        Ressources.staticImage = [];
        return Ressources;
    }());
    Data.Ressources = Ressources;
})(Data || (Data = {}));
//# sourceMappingURL=Ressources.js.map