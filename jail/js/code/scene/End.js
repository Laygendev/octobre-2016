var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene(orderManager) {
        _super.call(this);
        this.orderManager = orderManager;
        this.buttonOk = new Sprite(Data.Images.buttons['ok'], 'ok', 'buttons', { x: global.hWidth - 163 / 2, y: global.height - 100 });
        this.dialogManager.Clear();
        delete this.dialogManager;
        this.buttonOk.SetClickable({ w: 163, h: 45 }, { x: 0, y: 0 }, this.ChangeScene);
        this.spriteManager.Add(this.buttonOk);
    }
    EndScene.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
    };
    EndScene.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
        context.font = "80px Source Sans Pro Bold";
        context.fillText("Mission terminée", (global.hWidth) - 200, 160);
        context.save();
        context.translate(global.hWidth / 2 - 200, global.hHeight / 2 - 20);
        context.scale(0.5, 0.5);
        for (var key in this.orderManager.listOrder) {
            if (this.orderManager.listOrder[key].done) {
                this.orderManager.listOrder[key].character.Draw(context);
            }
        }
        context.restore();
    };
    EndScene.prototype.Clear = function () {
        _super.prototype.Clear.call(this);
    };
    EndScene.prototype.ChangeScene = function () {
        SceneManager.Manager.currentScene.Clear();
        SceneManager.Manager.SetScene(new SelectScene());
    };
    return EndScene;
}(Scene));
//# sourceMappingURL=End.js.map