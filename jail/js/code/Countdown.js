var Countdown = (function () {
    function Countdown() {
        this.interval = undefined;
        this.maxTime = 0;
        this.time = 0;
        this.objectToCall = [];
        this.endFuncToCall = undefined;
    }
    Countdown.prototype.Start = function (time) {
        var _this = this;
        this.maxTime = time;
        this.time = time;
        Data.Sounds.PlaySound("countdown", false);
        this.interval = setInterval(function () { _this.Update(); }, 1000);
    };
    Countdown.prototype.Update = function () {
        this.time--;
        for (var key in this.objectToCall) {
            this.objectToCall[key].Exec(this.maxTime - this.time);
        }
        if (this.time <= 0 && this.endFuncToCall) {
            this.Clear();
            this.endFuncToCall();
        }
    };
    Countdown.prototype.Draw = function (context) {
        context.font = "30px Source Sans Pro Bold";
        context.fillText("Temps restant: " + this.time, global.hWidth - 100, 50);
    };
    Countdown.prototype.Clear = function () {
        clearInterval(this.interval);
        delete this.interval;
        delete this.maxTime;
        delete this.time;
        delete this.objectToCall;
    };
    Countdown.prototype.SetObjectToCall = function (obj) {
        this.objectToCall.push(obj);
    };
    Countdown.prototype.SetEndFuncToCall = function (func) {
        this.endFuncToCall = func;
    };
    return Countdown;
}());
//# sourceMappingURL=Countdown.js.map