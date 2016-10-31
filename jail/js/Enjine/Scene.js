var Scene = (function () {
    function Scene() {
        this.spriteManager = new SpriteManager();
        this.dialogManager = new DialogManager();
        this.buttonExit = new SpriteClickable(Data.Images.buttons['exit'], 'exit', 'buttons', { x: global.width - 20, y: 0 }, { width: 19, height: 19 });
        this.spriteManager.Add(this.buttonExit);
    }
    Scene.prototype.Start = function () { };
    Scene.prototype.Update = function (delta) { };
    Scene.prototype.Draw = function (context) {
        if (this.spriteManager) {
            this.spriteManager.Draw(context);
        }
        if (this.dialogManager) {
            this.dialogManager.Draw(context);
        }
    };
    Scene.prototype.Clear = function () {
    };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map