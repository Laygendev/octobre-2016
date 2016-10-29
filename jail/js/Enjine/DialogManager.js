var DialogManager = (function () {
    function DialogManager(scene) {
        var _this = this;
        this.scene = scene;
        this.currentKeyDialog = 0;
        this.dialogs = [];
        this.mouseSprite = undefined;
        this.mouseSprite = new SpriteClickable(Data.Ressources.staticImage['mouse'], 0, 0, { width: 0, height: 0 }, "staticImage", "mouse");
        global.canvas.addEventListener('mousedown', function (event) { _this.MouseDown(event); }, false);
    }
    DialogManager.prototype.MouseDown = function (event) {
        if (this.dialogs) {
            if (this.dialogs[this.currentKeyDialog].done) {
                this.NextDialog();
            }
            else {
                if (this.dialogs[this.currentKeyDialog].currentChar > 4) {
                    this.dialogs[this.currentKeyDialog].CompleteDialog();
                }
            }
        }
    };
    DialogManager.prototype.Load = function (pathJson) {
        var _this = this;
        Data.JSONLoader.Exec(pathJson, function (data) {
            for (var i = 0; i < data.dialog.length; i++) {
                _this.AddDialog(new Dialog(data.dialog[i], 50, { x: 0, y: 0 }));
            }
        });
    };
    DialogManager.prototype.AddDialog = function (dialog) {
        this.dialogs.push(dialog);
    };
    DialogManager.prototype.Update = function () {
    };
    DialogManager.prototype.Draw = function (context) {
        context.save();
        context.fillStyle = "white";
        if (this.dialogs[this.currentKeyDialog]) {
            context.translate(global.size.width / 2 - 250, global.size.height / 2 - 150);
            context.fillRect(0, 0, 500, 300);
            this.mouseSprite.Draw(context);
            this.mouseSprite.SetPos(450, 250);
            context.translate(20, 50);
            this.dialogs[this.currentKeyDialog].Draw(context);
        }
        context.restore();
    };
    DialogManager.prototype.NextDialog = function () {
        this.currentKeyDialog++;
        if (this.currentKeyDialog >= this.dialogs.length) {
            this.Clear();
        }
        else {
            this.dialogs[this.currentKeyDialog].currentChar = 0;
            this.dialogs[this.currentKeyDialog].currentText = "";
            this.dialogs[this.currentKeyDialog].done = false;
        }
    };
    DialogManager.prototype.Clear = function () {
        var _this = this;
        delete this.currentKeyDialog;
        for (var key in this.dialogs) {
            this.dialogs[key].Clear();
        }
        global.canvas.removeEventListener('mousedown', function (event) { _this.MouseDown(event); }, false);
        delete this.dialogs;
        this.mouseSprite.Clear();
        delete this.mouseSprite;
        this.scene.Start();
    };
    return DialogManager;
}());
//# sourceMappingURL=DialogManager.js.map