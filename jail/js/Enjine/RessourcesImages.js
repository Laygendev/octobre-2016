var Data;
(function (Data) {
    var Images = (function () {
        function Images() {
        }
        Images.Load = function (callback) {
            var _this = this;
            this.buttons['restart'] = new Image();
            this.buttons['restart'].src = 'jail/images/buttonRestart.png';
            this.staticImage['leave'] = new Image();
            this.staticImage['leave'].src = 'jail/images/buttonLeave.png';
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
        Images.LoadSpriteSheet = function (callback) {
            var spriteSheet = new Image();
            spriteSheet.src = 'jail/images/spritesheet.png';
            callback(spriteSheet);
        };
        Images.RandomHumanPart = function () {
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
        Images.RandomBody = function () {
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
        Images.RandomPosBody = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (this.bodySpawn.length))) + this.bodySpawn.length;
            var tmp = this.bodySpawn[randomNumber];
            this.bodySpawn.splice(randomNumber, 1);
            return tmp;
        };
        Images.RandomPosOrder = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (this.orderSpawn.length))) + this.orderSpawn.length;
            var tmp = this.orderSpawn[randomNumber];
            this.orderSpawn.splice(randomNumber, 1);
            return tmp;
        };
        Images.isLoaded = false;
        Images.buttons = [];
        Images.numberBodies = 0;
        Images.numberHumanPart = 0;
        Images.staticImage = [];
        return Images;
    }());
    Data.Images = Images;
})(Data || (Data = {}));
//# sourceMappingURL=RessourcesImages.js.map