var Countdown = (function () {
    function Countdown(time) {
        var _this = this;
        this.time = time;
        this.interval = undefined;
        this.interval = setInterval(function () { _this.Update(); }, 1000);
    }
    Countdown.prototype.Update = function () {
    };
    Countdown.prototype.Clear = function () {
    };
    return Countdown;
}());
//# sourceMappingURL=Countdown.js.map