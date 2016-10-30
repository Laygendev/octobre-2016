var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SelectLevelScene = (function (_super) {
    __extends(SelectLevelScene, _super);
    function SelectLevelScene() {
        _super.call(this);
        this.spriteManager = new SpriteManager();
        this.spriteEurope = undefined;
        this.spriteFrance = undefined;
        this.spriteEurope = new SpriteClickable(Data.Ressources.staticImage['map'], global.size.width / 2 - 500, 50, { width: 0, height: 0 }, "staticImage", "terre");
        this.spriteManager.Add(this.spriteEurope);
        this.spriteFrance = new SpriteClickable(Data.Ressources.staticImage['mapFrance'], global.size.width / 2 - 41, 297, { width: 36, height: 37 }, "staticImage", "terre");
        this.spriteManager.Add(this.spriteFrance);
        this.dialogManager.Load('jail/json/dialog/levelSelectScene.json');
    }
    SelectLevelScene.prototype.Start = function () {
        delete this.dialogManager;
        this.started = true;
    };
    SelectLevelScene.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
        if (this.spriteFrance.ClickIn()) {
            this.Clear();
            SceneManager.Manager.SetScene(new Level11());
        }
    };
    SelectLevelScene.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
    };
    SelectLevelScene.prototype.Clear = function () {
        this.spriteManager.Clear();
        delete this.spriteManager;
        this.spriteEurope.Clear();
        delete this.spriteEurope;
        this.spriteFrance.Clear();
        delete this.spriteFrance;
    };
    SelectLevelScene.prototype.UpdateNoStarted = function (delta) {
    };
    SelectLevelScene.prototype.DrawNoStarted = function (context) {
        _super.prototype.DrawNoStarted.call(this, context);
    };
    return SelectLevelScene;
}(Scene));
//# sourceMappingURL=SelectLevelScene.js.map