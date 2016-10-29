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
        this.spawnManager = undefined;
        this.character = undefined;
        this.timer = undefined;
        this.point = new Point(this);
        this.orderManager = new OrderManager();
        this.spawnOrderManager = undefined;
        this.dialogManager = undefined;
        this.dialogManager = new DialogManager(this);
    }
    MainScene.prototype.Start = function () {
        delete this.dialogManager;
        this.started = true;
        this.spriteClickableTerre = new SpriteClickable(Data.Ressources.staticImage['terre'], global.size.width / 2 - (873 / 2), global.size.height - 176, { width: 873, height: 176 }, "staticImage", "terre");
        this.spriteManager.Add(this.spriteClickableTerre);
        this.spriteClickableTrash = new SpriteClickable(Data.Ressources.staticImage['trash'], 20, global.size.height - 130, { width: 111, height: 119 }, "staticImage", "terre");
        this.spriteManager.Add(this.spriteClickableTrash);
        this.spawnManager = new SpawnManager(this.spriteManager, 5000);
        this.StartChild();
    };
    MainScene.prototype.StartChild = function () { };
    MainScene.prototype.Init = function () { };
    MainScene.prototype.Spawn = function (currentTime) { };
    MainScene.prototype.InitCharacter = function (spriteKey) {
        var tmpSprite = new Sprite(0, 0, Data.Ressources.bodies[spriteKey], 'body', spriteKey);
        this.character = new Character(this, 0, 0, [], 'character');
        this.character.AddChild(tmpSprite);
    };
    MainScene.prototype.Update = function (delta) {
        if (this.character) {
            this.character.UpdateCollider(this.spriteManager, this.spriteManager.listSprite);
            this.character.Update();
        }
        var spriteKey = this.spriteManager.Update();
        if (spriteKey && !this.character) {
            this.InitCharacter(spriteKey);
        }
        if (this.spriteClickableTerre.ClickIn() && this.character) {
            var order = this.character.CheckElement(this.orderManager);
            if (order) {
                Data.Sound.PlaySound('sendHuman', false);
                order.SetCharacter(this.character);
                this.character.Clear();
                this.point.Add(20);
                delete this.character;
            }
            else {
                Data.Sound.PlaySound('wrong', false);
            }
        }
    };
    MainScene.prototype.Draw = function (context) {
        this.timer.Draw(context);
        if (this.character) {
            this.character.Draw(context);
        }
        this.spriteManager.Draw(context);
        this.point.Draw(context);
        this.DrawChildScene(context);
        this.notificationManager.Draw(context);
    };
    MainScene.prototype.DrawChildScene = function (context) { };
    MainScene.prototype.Clear = function () {
        this.spriteManager.Clear();
        delete this.spriteManager;
        this.spawnManager.Clear();
        delete this.spawnManager;
        if (this.character) {
            this.character.Clear();
            delete this.character;
        }
        this.spawnOrderManager.Clear();
        delete this.spawnOrderManager;
        this.timer.Clear();
        delete this.timer;
    };
    MainScene.prototype.ChangeScene = function () {
        this.Clear();
        SceneManager.Manager.SetScene(new EndScene(this.orderManager, this.point));
    };
    return MainScene;
}(Scene));
//# sourceMappingURL=MainScene.js.map