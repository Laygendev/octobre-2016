var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene(selectedBody) {
        _super.call(this);
        this.selectedBody = selectedBody;
        this.spriteManager = new SpriteManager();
        this.spawnManager = new SpawnManager(this.spriteManager, 1000);
        this.character = new Character(this, 0, 0, []);
    }
    MainScene.prototype.Init = function () {
        this.InitCharacter();
    };
    MainScene.prototype.InitCharacter = function () {
        var tmpSprite = new Sprite(0, 0, Data.Ressources.bodies[this.selectedBody], 'body');
        this.character.AddChild(tmpSprite);
    };
    MainScene.prototype.Update = function (delta) {
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