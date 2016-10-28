var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene(orderManager) {
        var _this = _super.call(this) || this;
        _this.orderManager = orderManager;
        _this.spriteManager = new SpriteManager();
        _this.buttonRestart = undefined;
        _this.gameOver = true;
        _this.character = undefined;
        console.log(_this.orderManager);
        _this.Init();
        return _this;
    }
    EndScene.prototype.Init = function () {
        this.buttonRestart = new SpriteClickable(Data.Ressources.buttons['restart'], (global.size.width / 2) - (163 / 2), global.size.height - 200, { width: 163, height: 45 }, 'button', 'button');
    };
    EndScene.prototype.InitWin = function () {
    };
    EndScene.prototype.InitGameOver = function () {
    };
    EndScene.prototype.Update = function (delta) {
        this.spriteManager.Update();
        if (this.buttonRestart.ClickIn()) {
            SceneManager.Manager.SetScene(new SelectBody());
        }
    };
    EndScene.prototype.Draw = function (context) {
        context.font = "80px Source Sans Pro Bold";
        context.fillText("Victoire!", (global.size.width / 2) - 140, 160);
        this.spriteManager.Draw(context);
    };
    return EndScene;
}(Scene));
//# sourceMappingURL=EndScene.js.map