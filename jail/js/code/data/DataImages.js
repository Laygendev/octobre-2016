var Data;
(function (Data) {
    var Images = (function () {
        function Images() {
        }
        Images.Load = function (cb) {
            this.LoadSpriteSheet(function () {
                Data.Images.LoadButton(function () {
                    Data.Images.LoadMapButton(function () {
                        Data.Images.LoadBackground(function () {
                            Data.Images.LoadStaticElement(function () {
                                Data.Images.LoadJSON(function () {
                                    cb();
                                });
                            });
                        });
                    });
                });
            });
        };
        Images.LoadSpriteSheet = function (cb) {
            var spriteSheet = new Image();
            Data.Images.spriteSheet.src = 'jail/images/spritesheet.png';
            console.log(Data.Images.spriteSheet);
            cb();
        };
        Images.LoadButton = function (cb) {
            Data.Images.buttons['ok'] = new Image();
            Data.Images.buttons['ok'].src = 'jail/images/buttonOk.png';
            Data.Images.buttons['leave'] = new Image();
            Data.Images.buttons['leave'].src = 'jail/images/buttonLeave.png';
            Data.Images.buttons['trash'] = new Image();
            Data.Images.buttons['trash'].src = 'jail/images/trash.png';
            Data.Images.buttons['terre'] = new Image();
            Data.Images.buttons['terre'].src = 'jail/images/terre.png';
            cb();
        };
        Images.LoadMapButton = function (cb) {
            Data.Images.buttons['levelFrance'] = new Image();
            Data.Images.buttons['levelFrance'].src = 'jail/images/map/france.png';
            cb();
        };
        Images.LoadBackground = function (cb) {
            Data.Images.backgrounds['europe'] = new Image();
            Data.Images.backgrounds['europe'].src = 'jail/images/europe.png';
            cb();
        };
        Images.LoadStaticElement = function (cb) {
            Data.Images.staticImages['helpPoubelle'] = new Image();
            Data.Images.staticImages['helpPoubelle'].src = 'jail/images/helpPoubelle.png';
            Data.Images.staticImages['helpCorpsEtCommande'] = new Image();
            Data.Images.staticImages['helpCorpsEtCommande'].src = 'jail/images/helpCorpsEtCommande.png';
            Data.Images.staticImages['mouse'] = new Image();
            Data.Images.staticImages['mouse'].src = 'jail/images/mouse.png';
            cb();
        };
        Images.LoadJSON = function (cb) {
            Data.JSONLoader.Exec('jail/json/bodySpawn.json', function (data) {
                Data.Images.bodiesSpawn = data;
                Data.JSONLoader.Exec('jail/json/orderSpawn.json', function (data) {
                    Data.Images.ordersSpawn = data;
                    Data.JSONLoader.Exec('jail/json/loadBodies.json', function (data) {
                        Data.Images.bodies = data;
                        Data.JSONLoader.Exec('jail/json/loadElements.json', function (data) {
                            Data.Images.humanParts = data;
                            cb();
                        });
                    });
                });
            });
        };
        Images.buttons = [];
        Images.backgrounds = [];
        Images.staticImages = [];
        return Images;
    }());
    Data.Images = Images;
})(Data || (Data = {}));
//# sourceMappingURL=DataImages.js.map