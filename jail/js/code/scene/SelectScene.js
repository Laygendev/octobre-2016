var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SelectScene = (function (_super) {
    __extends(SelectScene, _super);
    function SelectScene() {
        _super.call(this);
        this.spriteEurope = new Sprite(Data.Images.backgrounds['europe'], 'europe', 'staticImage', { x: global.hWidth - 978 / 2, y: global.hHeight - 650 / 2 });
        this.spriteFrance = new Sprite(Data.Images.buttons['levelFrance'], 'france', 'staticImage', { x: global.hWidth - 41, y: 297 });
        this.spriteManager.Add(this.spriteEurope);
        this.spriteManager.Add(this.spriteFrance);
        this.dialogManager.Load('jail/json/dialog/levelSelectScene.json');
    }
    SelectScene.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.spriteFrance.SetClickable({ w: 36, h: 37 }, { x: 0, y: 0 }, this.GoToParis);
    };
    SelectScene.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
    };
    SelectScene.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
    };
    SelectScene.prototype.Clear = function () {
        _super.prototype.Clear.call(this);
    };
    SelectScene.prototype.GoToParis = function () {
        SceneManager.Manager.currentScene.Clear();
        SceneManager.Manager.SetScene(new Paris());
    };
    return SelectScene;
}(Scene));
//# sourceMappingURL=SelectScene.js.map