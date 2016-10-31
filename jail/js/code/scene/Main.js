var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        _super.call(this);
        this.character = undefined;
        this.spriteClickableTerre = new Sprite(Data.Images.buttons['terre'], 'terre', 'buttons', { x: global.hWidth - (872 / 2), y: global.height - 176 });
        this.spriteClickableTrash = new Sprite(Data.Images.buttons['trash'], 'trash', 'buttons', { x: 0, y: global.height - 119 });
        this.countdown = undefined;
        this.spawnOrderManager = undefined;
        this.spawnManager = new SpawnManager();
        this.spriteManager.Add(this.spriteClickableTerre);
        this.spriteManager.Add(this.spriteClickableTrash);
    }
    MainScene.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.countdown = new Countdown();
        this.countdown.SetEndFuncToCall(this.ChangeScene);
        this.score = new Score();
    };
    MainScene.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (this.character) {
            this.character.Update();
        }
        if (this.bodyManager) {
            this.bodyManager.Update(deltaTime);
        }
    };
    MainScene.prototype.Draw = function (context) {
        this.bodyManager.Draw(context);
        _super.prototype.Draw.call(this, context);
        if (this.countdown) {
            this.countdown.Draw(context);
        }
        if (this.orderManager) {
            this.orderManager.Draw(context);
        }
        if (this.character) {
            this.character.Draw(context);
        }
    };
    MainScene.prototype.Clear = function () {
        _super.prototype.Clear.call(this);
        this.score.Clear();
        delete this.score;
    };
    MainScene.prototype.InitCharacter = function (triggerElement) {
        this.character = new Character();
        this.spriteClickableTrash.SetClickable({ w: 111, h: 119 }, { x: 0, y: 0 }, this.character.GoTrash);
        this.spriteClickableTerre.SetClickable({ w: 873, h: 176 }, { x: 0, y: 0 }, this.character.Delivery);
        var child = new Sprite(Data.Images.spriteSheet, "body0", "body", {
            x: 0,
            y: 0
        });
        this.character.AddChild(child);
        this.bodyManager.Remove(triggerElement);
    };
    MainScene.prototype.RemoveCharacter = function () {
        if (this.character) {
            this.character.Clear();
            delete this.character;
            Data.Sounds.PlaySound('poubelle', false);
        }
    };
    MainScene.prototype.Delivery = function () {
        if (this.character) {
            var order = this.character.CheckElement(this.orderManager);
            if (order) {
                Data.Sounds.PlaySound('send', false);
                order.SetCharacter(this.character);
                this.score.Add(20);
                delete this.character;
            }
            else {
                Data.Sounds.PlaySound('wrong', false);
            }
        }
    };
    MainScene.prototype.ChangeScene = function () {
        this.Clear();
        SceneManager.Manager.SetScene(new EndScene(SceneManager.Manager.currentScene.orderManager));
    };
    return MainScene;
}(Scene));
//# sourceMappingURL=Main.js.map