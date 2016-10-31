var Score = (function () {
    function Score() {
        this.point = 0;
    }
    Score.prototype.Draw = function (context) {
        context.font = "30px Source Sans Pro Bold";
        context.fillText("Pts: " + this.point, (global.hWidth) - 200, 50);
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