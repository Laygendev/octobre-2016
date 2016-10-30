var Score = (function () {
    function Score(mainScene) {
        this.mainScene = mainScene;
        this.point = 0;
        this.Init();
    }
    Score.prototype.Init = function () {
    };
    Score.prototype.Draw = function (context) {
        context.font = "30px Source Sans Pro Bold";
        context.fillText("Pts: " + this.point, (global.size.width / 2) - 200, 50);
    };
    Score.prototype.Clear = function () {
        delete this.point;
    };
    Score.prototype.Add = function (pointToAdd) {
        this.point += pointToAdd;
    };
    return Score;
}());
//# sourceMappingURL=Score.js.map