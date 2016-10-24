var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this) || this;
        _this.spriteManager = new SpriteManager();
        _this.character = new Character(0, 0, []);
        return _this;
    }
    MainScene.prototype.Init = function () {
        this.InitCharacter();
        var tmpSprite = undefined;
        tmpSprite = new Sprite(100, 200, Data.Ressources.humanPart['head0'], Data.Ressources.humanPart['head0'].type);
        this.spriteManager.Add(tmpSprite);
        tmpSprite = new Sprite(100, 50, Data.Ressources.humanPart['head1'], Data.Ressources.humanPart['head1'].type);
        this.spriteManager.Add(tmpSprite);
        tmpSprite = new Sprite(200, 200, Data.Ressources.humanPart['leg0'], Data.Ressources.humanPart['leg0'].type);
        this.spriteManager.Add(tmpSprite);
        tmpSprite = new Sprite(400, 200, Data.Ressources.humanPart['arm0'], Data.Ressources.humanPart['arm0'].type);
        this.spriteManager.Add(tmpSprite);
        tmpSprite = new Sprite(600, 200, Data.Ressources.humanPart['arm1'], Data.Ressources.humanPart['arm1'].type);
        this.spriteManager.Add(tmpSprite);
    };
    MainScene.prototype.InitCharacter = function () {
        var tmpSprite = new Sprite(0, 0, Data.Ressources.bodies['body1'], 'body');
        this.character.AddChild(tmpSprite);
    };
    MainScene.prototype.Update = function () {
        this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
        this.character.Update();
        this.spriteManager.Update();
    };
    MainScene.prototype.Draw = function (context) {
        this.character.Draw(context);
        this.spriteManager.Draw(context);
    };
    return MainScene;
}(Scene));
//# sourceMappingURL=MainScene.js.map