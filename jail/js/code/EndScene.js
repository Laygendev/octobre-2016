var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene(orderManager, point) {
        _super.call(this);
        this.orderManager = orderManager;
        this.point = point;
        this.spriteManager = new SpriteManager();
        this.buttonRestart = undefined;
        this.gameOver = true;
        this.character = undefined;
        this.started = true;
        this.Init();
    }
    EndScene.prototype.Init = function () {
        this.buttonRestart = new SpriteClickable(Data.Ressources.buttons['restart'], (global.size.width / 2) - (163 / 2), global.size.height - 200, { width: 163, height: 45 }, 'button', 'button');
        this.spriteManager.Add(this.buttonRestart);
        for (var key in this.orderManager.listOrder) {
            if (this.orderManager.listOrder[key].done) {
                var keyNumber = key;
                this.orderManager.listOrder[key].character.SetPos(keyNumber * 150, 0);
            }
        }
    };
    EndScene.prototype.Update = function (delta) {
        this.spriteManager.Update();
        if (this.buttonRestart.ClickIn()) {
            SceneManager.Manager.SetScene(new SelectLevelScene());
        }
    };
    EndScene.prototype.Draw = function (context) {
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
        this.spriteManager.Draw(context);
    };
    return EndScene;
}(Scene));
//# sourceMappingURL=EndScene.js.map