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
        _this.spawnManager = new SpawnManager(_this.spriteManager, 1000);
        _this.character = new Character(_this, 0, 0, []);
        return _this;
    }
    MainScene.prototype.Init = function () {
        this.InitCharacter();
    };
    MainScene.prototype.InitCharacter = function () {
        var tmpSprite = new Sprite(0, 0, Data.Ressources.bodies[this.selectedBody], 'body');
        this.character.AddChild(tmpSprite);
    };
    MainScene.prototype.Update = function () {
        this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
        this.character.Update();
        this.spriteManager.Update();
        if (this.character.CheckElement()) {
            this.ChangeScene(false);
        }
    };
    MainScene.prototype.Draw = function (context) {
        this.character.Draw(context);
        this.spriteManager.Draw(context);
    };
    MainScene.prototype.Clear = function () {
    };
    MainScene.prototype.ChangeScene = function (gameOver) {
        this.Clear();
        SceneManager.Manager.SetScene(new EndScene(this.character, gameOver));
    };
    return MainScene;
}(Scene));
//# sourceMappingURL=MainScene.js.map