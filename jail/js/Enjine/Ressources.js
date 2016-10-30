var Data;
(function (Data) {
    var Ressources = (function () {
        function Ressources() {
        }
        Ressources.Load = function (callback) {
            var _this = this;
            this.buttons['restart'] = new Image();
            this.buttons['restart'].src = 'jail/images/buttonRestart.png';
            this.staticImage['tapis'] = new Image();
            this.staticImage['tapis'].src = 'jail/images/tapis.png';
            this.staticImage['mouse'] = new Image();
            this.staticImage['mouse'].src = 'jail/images/mouse.png';
            this.staticImage['terre'] = new Image();
            this.staticImage['terre'].src = 'jail/images/terre.png';
            this.staticImage['map'] = new Image();
            this.staticImage['map'].src = 'jail/images/map.png';
            this.staticImage['trash'] = new Image();
            this.staticImage['trash'].src = 'jail/images/trash.png';
            this.staticImage['helpCorpsEtCommande'] = new Image();
            this.staticImage['helpCorpsEtCommande'].src = 'jail/images/helpCorpsEtCommande.png';
            this.staticImage['helpPoubelle'] = new Image();
            this.staticImage['helpPoubelle'].src = 'jail/images/helpPoubelle.png';
            this.staticImage['openMenu'] = new Image();
            this.staticImage['openMenu'].src = 'jail/images/openMenu.png';
            this.staticImage['openMenuHover'] = new Image();
            this.staticImage['openMenuHover'].src = 'jail/images/openMenuHover.png';
            this.staticImage['mapFrance'] = new Image();
            this.staticImage['mapFrance'].src = 'jail/images/mapFrance.png';
            this.LoadSpriteSheet(function (spriteSheet) {
                _this.spriteSheet = spriteSheet;
                Data.JSONLoader.Exec('jail/json/bodySpawn.json', function (data) {
                    _this.bodySpawn = data;
                    Data.JSONLoader.Exec('jail/json/orderSpawn.json', function (data) {
                        _this.orderSpawn = data;
                        Data.JSONLoader.Exec('jail/json/loadBodies.json', function (data) {
                            _this.bodies = data;
                            for (var key in _this.bodies) {
                                _this.numberBodies++;
                            }
                            Data.JSONLoader.Exec('jail/json/loadElements.json', function (data) {
                                _this.humanPart = data;
                                for (var key in _this.humanPart) {
                                    _this.numberHumanPart++;
                                }
                                _this.isLoaded = true;
                                callback();
                            });
                        });
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
        Ressources.RandomBody = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (this.numberBodies))) + this.numberBodies;
            var i = 0;
            for (var key in this.bodies) {
                if (i == randomNumber) {
                    return key;
                }
                i++;
            }
            return undefined;
        };
        Ressources.RandomPosBody = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (this.bodySpawn.length))) + this.bodySpawn.length;
            var tmp = this.bodySpawn[randomNumber];
            this.bodySpawn.splice(randomNumber, 1);
            return tmp;
        };
        Ressources.RandomPosOrder = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (this.orderSpawn.length))) + this.orderSpawn.length;
            var tmp = this.orderSpawn[randomNumber];
            this.orderSpawn.splice(randomNumber, 1);
            return tmp;
        };
        return Ressources;
    }());
    Ressources.isLoaded = false;
    Ressources.buttons = [];
    Ressources.numberBodies = 0;
    Ressources.numberHumanPart = 0;
    Ressources.staticImage = [];
    Data.Ressources = Ressources;
})(Data || (Data = {}));
//# sourceMappingURL=Ressources.js.map