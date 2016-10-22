var Application = (function () {
    function Application() {
        this.framesPerSecond = 1000 / 30;
        this.loader = undefined;
        this.LoadCanvas();
        this.StartTimer();
        this.StartLoadData();
    }
    Application.prototype.LoadCanvas = function () {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
        EventMouse.Mouse.Event(this.canvas);
    };
    Application.prototype.StartTimer = function () {
        var _this = this;
        this.lastTime = new Date().getTime();
        setInterval(function () { _this.Update(); }, this.framesPerSecond);
    };
    Application.prototype.StartLoadData = function () {
        this.loader = new Loader();
    };
    Application.prototype.Update = function () {
        if (SceneManager.Manager.currentScene && Data.Ressources.isLoaded) {
            SceneManager.Manager.currentScene.Update();
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            SceneManager.Manager.currentScene.Draw(this.context);
        }
    };
    return Application;
}());
//# sourceMappingURL=Application.js.map