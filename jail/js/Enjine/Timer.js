var Timer = (function () {
    function Timer(time, maxTime, mainScene) {
        this.time = time;
        this.maxTime = maxTime;
        this.mainScene = mainScene;
        this.secondTime = 0;
        this.countdown = 3;
        this.intervalTimer = undefined;
        this.notifications = undefined;
        this.notificationManager = undefined;
        this.Init();
    }
    Timer.prototype.Init = function () {
        var _this = this;
        Data.Sound.PlaySound('countdown', false);
        this.intervalTimer = setInterval(function () { _this.Update(); }, this.time);
    };
    Timer.prototype.Update = function () {
        this.secondTime += 1;
        this.CheckNotification();
        if (this.countdown > 0) {
            this.countdown--;
        }
        else {
            if (!this.mainScene.started) {
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
    Timer.prototype.LoadNotification = function (notificationManager, pathJson) {
        var _this = this;
        this.notificationManager = notificationManager;
        Data.JSONLoader.Exec(pathJson, function (data) {
            _this.notifications = data;
        });
    };
    Timer.prototype.CheckNotification = function () {
        if (this.notificationManager) {
            if (this.notifications && this.notifications[this.secondTime]) {
                for (var key in this.notifications[this.secondTime]) {
                    this.notificationManager.Add(new Notification(this.notifications[this.secondTime][key].text, { x: this.notifications[this.secondTime][key].x, y: this.notifications[this.secondTime][key].y }, this.notifications[this.secondTime][key].size));
                }
            }
        }
    };
    Timer.prototype.Clear = function () {
        clearInterval(this.intervalTimer);
        delete this.intervalTimer;
        delete this.maxTime;
        delete this.secondTime;
        delete this.mainScene;
    };
    return Timer;
}());
//# sourceMappingURL=Timer.js.map