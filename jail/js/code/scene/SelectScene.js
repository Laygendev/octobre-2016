var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SelectScene = (function (_super) {
    __extends(SelectScene, _super);
    function SelectScene() {
        _super.call(this);
        this.spriteEurope = undefined;
        this.spriteFrance = undefined;
        this.dialogManager.Load('jail/json/dialog/levelSelectScene.json');
    }
    SelectScene.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
        if (this.spriteFrance.ClickIn()) {
            this.Clear();
            SceneManager.Manager.SetScene(new Level11());
        }
    };
    SelectScene.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
    };
    SelectScene.prototype.Clear = function () {
        this.spriteManager.Clear();
        delete this.spriteManager;
        this.spriteEurope.Clear();
        delete this.spriteEurope;
        this.spriteFrance.Clear();
        delete this.spriteFrance;
    };
    return SelectScene;
}(Scene));
//# sourceMappingURL=SelectScene.js.map