var Scene = (function () {
    function Scene() {
        this.started = false;
        this.dialogManager = undefined;
        this.buttonLeave = undefined;
        this.spriteManager = new SpriteManager();
        this.buttonLeave = new SpriteClickable(Data.Ressources.staticImage['leave'], global.size.width - 40, 20, { width: 19, height: 19 }, "clickableImage", "leave", undefined);
        this.spriteManager.Add(this.buttonLeave);
        this.dialogManager = new DialogManager(this);
    }
    Scene.prototype.Start = function () { };
    Scene.prototype.Init = function () { };
    Scene.prototype.Update = function (delta) {
        console.log('Update');
    };
    Scene.prototype.Draw = function (context) {
        this.spriteManager.Draw(context);
    };
    Scene.prototype.UpdateNoStarted = function (delta) {
        if (this.buttonLeave.ClickIn()) {
            window.open('', '_self', '');
            window.close();
        }
    };
    Scene.prototype.DrawNoStarted = function (context) {
        if (this.spriteManager) {
            this.spriteManager.Draw(context);
        }
        if (this.dialogManager) {
            this.dialogManager.Draw(context);
        }
    };
    Scene.prototype.Resize = function () { };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map