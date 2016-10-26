/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene(character, gameOver) {
        _super.call(this);
        this.spriteManager = new SpriteManager();
        this.buttonRestart = undefined;
        this.gameOver = true;
        this.character = undefined;
        this.character = character;
        if (gameOver != undefined) {
            this.gameOver = gameOver;
        }
        if (this.character) {
            this.character.x = global.size.width / 2;
            this.character.y = global.size.height / 2;
        }
        this.Init();
    }
    EndScene.prototype.Init = function () {
        this.buttonRestart = new SpriteClickable(Data.Ressources.buttons['restart'], (global.size.width / 2) - (163 / 2), global.size.height - 200, { width: 163, height: 45 }, 'button');
        this.spriteManager.Add(this.buttonRestart);
        if (!this.gameOver) {
            this.InitWin();
        }
        else {
            this.InitGameOver();
        }
    };
    EndScene.prototype.InitWin = function () {
    };
    EndScene.prototype.InitGameOver = function () {
    };
    EndScene.prototype.Update = function (delta) {
        this.spriteManager.Update();
        if (this.buttonRestart.ClickIn()) {
            SceneManager.Manager.SetScene(new SelectBody());
        }
    };
    EndScene.prototype.Draw = function (context) {
        if (this.gameOver) {
            context.font = "80px Source Sans Pro Bold";
            context.fillText("Game Over!", (global.size.width / 2) - 200, 160);
        }
        else {
            context.font = "80px Source Sans Pro Bold";
            context.fillText("Victoire!", (global.size.width / 2) - 140, 160);
        }
        if (this.character) {
            this.character.Draw(context);
        }
        this.spriteManager.Draw(context);
    };
    return EndScene;
})(Scene);
//# sourceMappingURL=EndScene.js.map