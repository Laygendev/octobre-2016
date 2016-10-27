/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
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
        this.character = undefined;
        this.timer = new Timer(1000, 800, this);
    }
    MainScene.prototype.Init = function () {
        this.spawnHumanPartSprite = new SpriteRepeat(Data.Ressources.staticImage['tapis'], 0, global.size.height - 41, { width: 100, height: 41 }, "x");
        this.spriteManager.Add(this.spawnHumanPartSprite);
    };
    MainScene.prototype.Spawn = function (currentTime) { };
    MainScene.prototype.InitCharacter = function (spriteKey) {
        console.log(spriteKey);
        var tmpSprite = new Sprite(0, 0, Data.Ressources.bodies[spriteKey], 'body');
        this.character = new Character(this, 0, 0, []);
        this.character.AddChild(tmpSprite);
    };
    MainScene.prototype.Update = function (delta) {
        if (this.character) {
            this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
            this.character.Update();
            if (this.character.CheckElement()) {
                this.ChangeScene(false);
            }
        }
        var spriteKey = this.spriteManager.Update();
        console.log(spriteKey);
        if (spriteKey && !this.character) {
            this.InitCharacter(spriteKey);
        }
        this.UpdateChildScene(delta);
    };
    MainScene.prototype.UpdateChildScene = function (delta) {
    };
    MainScene.prototype.Draw = function (context) {
        this.timer.Draw(context);
        if (this.character) {
            this.character.Draw(context);
        }
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
})(Scene);
//# sourceMappingURL=MainScene.js.map