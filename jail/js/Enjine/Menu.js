var Menu = (function () {
    function Menu(button) {
        this.button = button;
        this.isOpen = false;
        this.canClose = false;
        this.canOpen = true;
    }
    Menu.prototype.Update = function () {
        var _this = this;
        if (this.button.ClickIn() && !this.isOpen && this.canOpen) {
            this.isOpen = true;
            this.canOpen = false;
            setTimeout(function () { _this.canClose = true; }, 100);
        }
        if (this.button.ClickIn() && this.isOpen && this.canClose) {
            this.isOpen = false;
            this.canClose = false;
            setTimeout(function () { _this.canOpen = true; }, 100);
        }
    };
    Menu.prototype.DrawRect = function (context) {
        context.translate(global.size.width / 2 - 150, global.size.height / 2 - 200);
        context.fillRect(0, 0, 300, 400);
    };
    Menu.prototype.Draw = function (context) {
        context.save();
        console.log(this.isOpen);
        if (this.isOpen) {
            this.DrawRect(context);
        }
        context.restore();
    };
    Menu.prototype.Clear = function () {
    };
    return Menu;
}());
//# sourceMappingURL=Menu.js.map