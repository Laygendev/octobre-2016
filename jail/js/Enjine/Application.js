var global = { canvas: undefined, width: 0, height: 0 };
var Application = (function () {
    function Application() {
        var _this = this;
        this.canvas = undefined;
        this.context = undefined;
        this.timer = undefined;
        this.loader = new Loader();
        this.LoadCanvas();
        this.StartLoadData(function () {
            SceneManager.Manager.SetScene(new SceneDidacticiel());
            _this.timer = new Timer(_this);
        });
    }
    Application.prototype.LoadCanvas = function () {
        this.canvas = document.getElementById("canvas");
        global["canvas"] = this.canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        global["width"] = this.canvas.width;
        global["height"] = this.canvas.height;
        global["hWidth"] = this.canvas.width / 2;
        global["hHeight"] = this.canvas.height / 2;
        this.context = this.canvas.getContext('2d');
        EventMouse.Mouse.Event(this.canvas);
        EventKeyboard.Input.Event(this.canvas);
    };
    Application.prototype.StartLoadData = function (cb) {
        this.loader.Exec(function () {
            cb();
        });
    };
    Application.prototype.Update = function (deltaTime) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (SceneManager.Manager.currentScene) {
            SceneManager.Manager.currentScene.Update(deltaTime);
            SceneManager.Manager.currentScene.Draw(this.context);
        }
    };
    return Application;
}());
//# sourceMappingURL=Application.js.map