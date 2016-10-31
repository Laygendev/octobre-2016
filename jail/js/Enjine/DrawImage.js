var Helper;
(function (Helper) {
    var DrawImage = (function () {
        function DrawImage() {
        }
        DrawImage.Draw = function (name, context) {
            var x = 0;
            var y = 0;
            if (Data.Object.humanParts[name]) {
                if (Data.Object.humanParts[name].type == "arml") {
                    y = 110;
                }
                if (Data.Object.humanParts[name].type == "armr") {
                    y = 110;
                    x = 85;
                }
                if (Data.Object.humanParts[name].type == "leg") {
                    y = 190;
                    x = 22;
                }
                context.drawImage(Data.Images.spriteSheet, Data.Object.humanParts[name].x, Data.Object.humanParts[name].y, Data.Object.humanParts[name].width, Data.Object.humanParts[name].height, x, y, Data.Object.humanParts[name].width, Data.Object.humanParts[name].height);
            }
            else {
                y = 100;
                x = 30;
                context.drawImage(Data.Images.spriteSheet, Data.Object.bodies[name].x, Data.Object.bodies[name].y, Data.Object.bodies[name].width, Data.Object.bodies[name].height, x, y, Data.Object.bodies[name].width, Data.Object.bodies[name].height);
            }
        };
        ;
        return DrawImage;
    }());
    Helper.DrawImage = DrawImage;
})(Helper || (Helper = {}));
//# sourceMappingURL=DrawImage.js.map