var Helper;
(function (Helper) {
    var DrawImage = (function () {
        function DrawImage() {
        }
        DrawImage.Draw = function (name, context, x, y) {
            if (Data.Ressources.humanPart[name]) {
                context.drawImage(Data.Ressources.spriteSheet, Data.Ressources.humanPart[name].x, Data.Ressources.humanPart[name].y, Data.Ressources.humanPart[name].width, Data.Ressources.humanPart[name].height, x, y, Data.Ressources.humanPart[name].width, Data.Ressources.humanPart[name].height);
            }
            else {
                context.drawImage(Data.Ressources.spriteSheet, Data.Ressources.bodies[name].x, Data.Ressources.bodies[name].y, Data.Ressources.bodies[name].width, Data.Ressources.bodies[name].height, x, y, Data.Ressources.bodies[name].width, Data.Ressources.bodies[name].height);
            }
        };
        ;
        return DrawImage;
    }());
    Helper.DrawImage = DrawImage;
})(Helper || (Helper = {}));
//# sourceMappingURL=DrawImage.js.map