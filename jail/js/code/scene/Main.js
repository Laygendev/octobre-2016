var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        _super.call(this);
        this.spawnManager = undefined;
        this.character = undefined;
        this.spriteClickableTerre = new SpriteClickable(Data.Images.buttons['terre'], 'terre', 'buttons', { x: global.hWidth - (872 / 2), y: global.height - 176 }, { width: 873, height: 176 });
        this.spriteClickableTrash = new SpriteClickable(Data.Images.buttons['trash'], 'trash', 'buttons', { x: 0, y: global.height - 119 }, { width: 111, height: 119 });
        this.countdown = undefined;
        this.orderManager = new OrderManager();
        this.spawnOrderManager = undefined;
        this.spriteManager.Add(this.spriteClickableTerre);
        this.spriteManager.Add(this.spriteClickableTrash);
    }
    MainScene.prototype.Start = function () {
        _super.prototype.Start.call(this);
    };
    MainScene.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (this.countdown) {
            this.countdown.Update();
        }
        if (this.character) {
            this.character.Update();
        }
    };
    MainScene.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
        if (this.countdown) {
            this.countdown.Update();
        }
        if (this.orderManager) {
            this.orderManager.Draw(context);
        }
        if (this.character) {
            this.character.Draw(context);
        }
    };
    MainScene.prototype.Clear = function () {
        _super.prototype.Clear.call(this);
    };
    return MainScene;
}(Scene));
//# sourceMappingURL=Main.js.map