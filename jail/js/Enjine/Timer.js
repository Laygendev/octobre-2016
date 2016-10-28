var Timer = (function () {
    function Timer(time, maxTime, mainScene) {
        this.time = time;
        this.maxTime = maxTime;
        this.mainScene = mainScene;
        this.secondTime = 0;
        this.countdown = 3;
        this.Init();
    }
    Timer.prototype.Init = function () {
        var _this = this;
        Data.Sound.PlaySound('countdown', false);
        setInterval(function () { _this.Update(); }, this.time);
    };
    Timer.prototype.Update = function () {
        this.secondTime += 1;
        if (this.countdown > 0) {
            this.countdown--;
        }
        else {
            if (!this.mainScene.started) {
                this.mainScene.started = true;
            }
        }
        this.mainScene.Spawn(this.secondTime);
        if (this.secondTime >= this.maxTime) {
            this.mainScene.ChangeScene();
        }
    };
    Timer.prototype.Draw = function (context) {
        context.font = "30px Source Sans Pro Bold";
        context.fillText("Temps restant: " + (this.maxTime - this.secondTime), (global.size.width / 2) - 100, 50);
        if (this.countdown > 0) {
            context.font = "100px Source Sans Pro Bold";
            context.fillText(this.countdown, (global.size.width / 2) - 50, (global.size.height / 2) - 50);
        }
    };
    Timer.prototype.Clear = function () {
        delete this.maxTime;
        delete this.secondTime;
        delete this.mainScene;
    };
    return Timer;
}());
//# sourceMappingURL=Timer.js.map