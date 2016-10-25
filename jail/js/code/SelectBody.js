var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SelectBody = (function (_super) {
    __extends(SelectBody, _super);
    function SelectBody() {
        var _this = _super.call(this) || this;
        _this.spriteManager = new SpriteManager();
        _this.Init();
        return _this;
    }
    SelectBody.prototype.Init = function () {
        var tmpSprite = undefined;
        tmpSprite = new SpriteClickable(undefined, global.size.width / 2 - 200, global.size.height / 2 - 50, Data.Ressources.bodies['body0'], 'body');
        this.spriteManager.Add(tmpSprite);
        tmpSprite = new SpriteClickable(undefined, global.size.width / 2 - 50, global.size.height / 2 - 50, Data.Ressources.bodies['body1'], 'body');
        this.spriteManager.Add(tmpSprite);
        tmpSprite = new SpriteClickable(undefined, global.size.width / 2 + 100, global.size.height / 2 - 50, Data.Ressources.bodies['body2'], 'body');
        this.spriteManager.Add(tmpSprite);
    };
    SelectBody.prototype.Update = function () {
        this.spriteManager.Update();
        for (var key in this.spriteManager.listSprite["body"]) {
            if (this.spriteManager.listSprite["body"][key].ClickIn()) {
                this.Clear();
                this.ChangeScene('body' + key);
                break;
            }
        }
    };
    SelectBody.prototype.Draw = function (context) {
        context.font = "60px Source Sans Pro Bold";
        context.fillText("Make your funny character", (global.size.width / 2) - 350, 160);
        context.font = "30px Source Sans Pro Bold";
        context.fillText("Clic sur le corps de ton choix", (global.size.width / 2) - 200, 400);
        this.spriteManager.Draw(context);
    };
    SelectBody.prototype.ChangeScene = function (selectedBody) {
        this.Clear();
        SceneManager.Manager.SetScene(new MainScene(selectedBody));
    };
    SelectBody.prototype.Clear = function () {
    };
    return SelectBody;
}(Scene));
//# sourceMappingURL=SelectBody.js.map