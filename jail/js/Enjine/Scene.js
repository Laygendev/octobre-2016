var Scene = (function () {
    function Scene() {
        this.spriteManager = new SpriteManager();
        this.orderManager = new OrderManager();
        this.bodyManager = new BodyManager();
        this.dialogManager = new DialogManager();
        this.buttonExit = new Sprite(Data.Images.buttons['exit'], 'exit', 'buttons', { x: global.width - 20, y: 0 });
        this.character = undefined;
        this.score = undefined;
        this.buttonExit.SetClickable({ w: 19, h: 19 }, { x: 0, y: 0 }, global.application.Exit);
        this.spriteManager.Add(this.buttonExit);
    }
    Scene.prototype.Start = function () { };
    Scene.prototype.Update = function (delta) {
        if (this.spriteManager) {
            this.spriteManager.Update(delta);
        }
    };
    Scene.prototype.Draw = function (context) {
        if (this.spriteManager) {
            this.spriteManager.Draw(context);
        }
        if (this.dialogManager) {
            this.dialogManager.Draw(context);
        }
        if (this.score) {
            this.score.Draw(context);
        }
    };
    Scene.prototype.Clear = function () {
        this.spriteManager.Clear();
        delete this.spriteManager;
        this.bodyManager.Clear();
        delete this.bodyManager;
    };
    Scene.prototype.InitCharacter = function (triggerElement) { };
    Scene.prototype.RemoveCharacter = function () { };
    Scene.prototype.Delivery = function () { };
    Scene.prototype.ChangeScene = function () { };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map