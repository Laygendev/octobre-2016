var Helper;
(function (Helper) {
    var DrawImage = (function () {
        function DrawImage() {
        }
        DrawImage.Draw = function (name, context) {
            var x = 0;
            var y = 0;
            if (Data.Ressources.humanPart[name]) {
                if (Data.Ressources.humanPart[name].type == "arml") {
                    y = 110;
                }
                if (Data.Ressources.humanPart[name].type == "armr") {
                    y = 110;
                    x = 85;
                }
                if (Data.Ressources.humanPart[name].type == "leg") {
                    y = 190;
                    x = 22;
                }
                context.drawImage(Data.Ressources.spriteSheet, Data.Ressources.humanPart[name].x, Data.Ressources.humanPart[name].y, Data.Ressources.humanPart[name].width, Data.Ressources.humanPart[name].height, x, y, Data.Ressources.humanPart[name].width, Data.Ressources.humanPart[name].height);
            }
            else {
                y = 100;
                x = 30;
                context.drawImage(Data.Ressources.spriteSheet, Data.Ressources.bodies[name].x, Data.Ressources.bodies[name].y, Data.Ressources.bodies[name].width, Data.Ressources.bodies[name].height, x, y, Data.Ressources.bodies[name].width, Data.Ressources.bodies[name].height);
            }
        };
        ;
        return DrawImage;
    }());
    Helper.DrawImage = DrawImage;
})(Helper || (Helper = {}));
//# sourceMappingURL=DrawImage.js.map