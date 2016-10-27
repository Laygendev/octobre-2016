var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene(selectedBody) {
        var _this = _super.call(this) || this;
        _this.selectedBody = selectedBody;
        _this.spriteManager = new SpriteManager();
        _this.character = new Character(_this, 0, 0, []);
        _this.timer = new Timer(1000, 50, _this);
        return _this;
    }
    MainScene.prototype.Init = function () {
        this.InitCharacter();
        this.spawnHumanPartSprite = new SpriteRepeat(Data.Ressources.staticImage['tapis'], 0, global.size.height - 41, { width: 100, height: 41 }, "x");
        this.spriteManager.Add(this.spawnHumanPartSprite);
    };
    MainScene.prototype.Spawn = function (currentTime) { };
    MainScene.prototype.InitCharacter = function () {
    };
    MainScene.prototype.Update = function (delta) {
        this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
        this.character.Update();
        this.spriteManager.Update();
        if (this.character.CheckElement()) {
            this.ChangeScene(false);
        }
        this.UpdateChildScene(delta);
    };
    MainScene.prototype.UpdateChildScene = function (delta) {
    };
    MainScene.prototype.Draw = function (context) {
        this.timer.Draw(context);
        this.character.Draw(context);
        this.spriteManager.Draw(context);
        this.DrawChildScene(context);
    };
    MainScene.prototype.DrawChildScene = function (context) { };
    MainScene.prototype.Clear = function () {
        this.timer.Clear();
        delete this.timer;
    };
    MainScene.prototype.ChangeScene = function (gameOver) {
        this.Clear();
        SceneManager.Manager.SetScene(new EndScene(this.character, gameOver));
    };
    return MainScene;
}(Scene));
//# sourceMappingURL=MainScene.js.map