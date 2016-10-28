var Point = (function () {
    function Point(mainScene) {
        this.mainScene = mainScene;
        this.point = 0;
        this.Init();
    }
    Point.prototype.Init = function () {
    };
    Point.prototype.Draw = function (context) {
        context.font = "30px Source Sans Pro Bold";
        context.fillText("Pts: " + this.point, (global.size.width / 2) - 200, 50);
    };
    Point.prototype.Clear = function () {
        delete this.point;
    };
    Point.prototype.Add = function (pointToAdd) {
        this.point += pointToAdd;
    };
    return Point;
}());
//# sourceMappingURL=Point.js.map