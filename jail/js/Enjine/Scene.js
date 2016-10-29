var Scene = (function () {
    function Scene() {
        this.started = false;
        this.notificationManager = new NotificationManager();
    }
    Scene.prototype.Start = function () { };
    Scene.prototype.Init = function () { };
    Scene.prototype.Update = function (delta) { };
    Scene.prototype.Draw = function (context) { };
    Scene.prototype.UpdateNoStarted = function (delta) { };
    Scene.prototype.DrawNoStarted = function (context) { };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map