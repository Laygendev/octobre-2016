var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene(orderManager, score) {
        _super.call(this);
        this.orderManager = orderManager;
        this.score = score;
        this.buttonRestart = undefined;
    }
    EndScene.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
        if (this.buttonRestart.ClickIn()) {
            SceneManager.Manager.SetScene(new SelectLevelScene());
        }
    };
    EndScene.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
        context.font = "80px Source Sans Pro Bold";
        context.fillText("Mission terminée", (global.size.width / 2) - 200, 160);
        context.font = "20px Source Sans Pro Bold";
        context.fillText("Score: " + this.point.point, (global.size.width / 2) - 200, 200);
        context.save();
        context.translate(global.size.width / 2 - 200, global.size.height / 2 - 20);
        context.scale(0.5, 0.5);
        for (var key in this.orderManager.listOrder) {
            if (this.orderManager.listOrder[key].done) {
                console.log(this.orderManager.listOrder[key].character);
                this.orderManager.listOrder[key].character.Draw(context);
            }
        }
        context.restore();
    };
    return EndScene;
}(Scene));
//# sourceMappingURL=EndScene.js.map