var Data;
(function (Data) {
    var Images = (function () {
        function Images() {
        }
        Images.Load = function (cb) {
            this.LoadSpriteSheet(function () {
                Data.Images.LoadButton(function () {
                    Data.Images.LoadBackground(function () {
                        Data.Images.LoadStaticElement(function () {
                            Data.Images.LoadJSON(function () {
                                cb();
                            });
                        });
                    });
                });
            });
        };
        Images.LoadSpriteSheet = function (cb) {
            Data.Images.spriteSheet.src = 'jail/images/spritesheet.png';
            cb();
        };
        Images.LoadButton = function (cb) {
            Data.Images.buttons['ok'] = new Image();
            Data.Images.buttons['ok'].src = 'jail/images/button/ok.png';
            Data.Images.buttons['exit'] = new Image();
            Data.Images.buttons['exit'].src = 'jail/images/button/exit.png';
            Data.Images.buttons['trash'] = new Image();
            Data.Images.buttons['trash'].src = 'jail/images/button/trash.png';
            Data.Images.buttons['terre'] = new Image();
            Data.Images.buttons['terre'].src = 'jail/images/button/terre.png';
            Data.Images.buttons['levelFrance'] = new Image();
            Data.Images.buttons['levelFrance'].src = 'jail/images/button/france.png';
            cb();
        };
        Images.LoadBackground = function (cb) {
            Data.Images.backgrounds['europe'] = new Image();
            Data.Images.backgrounds['europe'].src = 'jail/images/background/map.png';
            cb();
        };
        Images.LoadStaticElement = function (cb) {
            Data.Images.staticImages['helpPoubelle'] = new Image();
            Data.Images.staticImages['helpPoubelle'].src = 'jail/images/didacticiel/helpPoubelle.png';
            Data.Images.staticImages['helpCorpsEtCommande'] = new Image();
            Data.Images.staticImages['helpCorpsEtCommande'].src = 'jail/images/didacticiel/helpCorpsEtCommande.png';
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
        Images.spriteSheet = new Image();
        Images.buttons = [];
        Images.backgrounds = [];
        Images.staticImages = [];
        Images.bodies = undefined;
        Images.humanParts = undefined;
        Images.bodiesSpawn = undefined;
        Images.ordersSpawn = undefined;
        return Images;
    }());
    Data.Images = Images;
})(Data || (Data = {}));
//# sourceMappingURL=Images.js.map