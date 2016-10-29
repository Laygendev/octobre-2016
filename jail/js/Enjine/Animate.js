var Utils;
(function (Utils) {
    var Animate = (function () {
        function Animate() {
        }
        Animate.Scale = function (scale) {
            if (scale.x < 1.5 && scale.x >= 1.0) {
                scale.x += 0.01;
                scale.y += 0.01;
            }
            else {
                scale.x -= 0.01;
                scale.y -= 0.01;
            }
            return scale;
        };
        return Animate;
    }());
    Utils.Animate = Animate;
})(Utils || (Utils = {}));
//# sourceMappingURL=Animate.js.map