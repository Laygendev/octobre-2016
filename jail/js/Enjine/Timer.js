var Timer = (function () {
    function Timer(application) {
        var _this = this;
        this.application = application;
        this.mainInterval = undefined;
        this.framesPerSecond = 1000 / 30;
        this.lastTime = 0;
        this.lastTime = new Date().getTime();
        this.mainInterval = setInterval(function () { _this.Update(); }, this.framesPerSecond);
    }
    Timer.prototype.Update = function () {
        var newTime = new Date().getTime();
        var delta = (newTime - this.lastTime) / 1000;
        this.lastTime = newTime;
        this.application.Update(delta);
    };
    return Timer;
}());
//# sourceMappingURL=Timer.js.map