var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        _super.call(this);
        this.spriteManager = new SpriteManager();
        this.spawnManager = new SpawnManager(this.spriteManager, 1000);
        this.character = new Character(0, 0, []);
    }
    MainScene.prototype.Init = function () {
        this.InitCharacter();
    };
    MainScene.prototype.InitCharacter = function () {
        var tmpSprite = new Sprite(0, 0, Data.Ressources.bodies['body0']);
        this.character.AddChild(tmpSprite);
        tmpSprite = new Sprite(0, 0, Data.Ressources.humanPart['head0']);
        tmpSprite.SetOffset({ x: 0, y: 80 });
        this.character.AddChild(tmpSprite);
    };
    MainScene.prototype.Update = function () {
        this.character.Update();
    };
    MainScene.prototype.Draw = function (context) {
        this.character.Draw(context);
        this.spriteManager.Draw(context);
    };
    return MainScene;
}(Scene));
//# sourceMappingURL=MainScene.js.map