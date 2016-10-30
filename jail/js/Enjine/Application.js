var global = {};
global.size = { width: 0, height: 0 };
var Application = (function () {
    function Application() {
        this.framesPerSecond = 1000 / 30;
        this.lastTime = 0;
        this.loader = undefined;
        this.LoadCanvas();
        this.StartTimer();
        this.StartLoadData();
    }
    Application.prototype.LoadCanvas = function () {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        global.canvas = this.canvas;
        this.context = this.canvas.getContext('2d');
        global.size.width = this.canvas.width;
        global.size.height = this.canvas.height;
        EventMouse.Mouse.Event(this.canvas);
        EventKeyboard.Input.Event(this.canvas);
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
        var newTime = new Date().getTime();
        var delta = (newTime - this.lastTime) / 1000;
        this.lastTime = newTime;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (SceneManager.Manager.currentScene && Data.Ressources.isLoaded) {
            if (SceneManager.Manager.currentScene.started) {
                SceneManager.Manager.currentScene.Update(delta);
                SceneManager.Manager.currentScene.Draw(this.context);
            }
            else {
                SceneManager.Manager.currentScene.UpdateNoStarted(delta);
                SceneManager.Manager.currentScene.DrawNoStarted(this.context);
            }
        }
    };
    return Application;
}());
//# sourceMappingURL=Application.js.map