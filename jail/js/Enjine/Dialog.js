var Dialog = (function () {
    function Dialog(data, speedText) {
        var _this = this;
        this.data = data;
        this.currentText = "";
        this.currentChar = 0;
        this.maxWidth = 480;
        this.lineHeight = 40;
        this.done = false;
        this.pos = { x: 0, y: 0 };
        this.pos.x = data.text.x;
        this.pos.y = data.text.y;
        this.interval = setInterval(function () { _this.Update(); }, speedText);
    }
    Dialog.prototype.Update = function () {
        if (this.currentChar < this.data.text.string.length) {
            this.currentText += this.data.text.string[this.currentChar];
            this.currentChar++;
        }
        else {
            this.done = true;
        }
    };
    Dialog.prototype.DrawRect = function (mouseSprite, context) {
        context.translate(global.hWidth - this.data.rect.width / 2, global.hHeight - this.data.rect.height / 2);
        context.fillRect(0, 0, this.data.rect.width, this.data.rect.height);
        context.translate(20, 50);
    };
    Dialog.prototype.Draw = function (mouseSprite, context) {
        this.DrawRect(mouseSprite, context);
        context.fillStyle = "black";
        context.font = "26px Source Sans Pro Bold";
        if (this.data.text.backLineSpecial) {
            var words = this.currentText.split(' ');
            var line = '';
            var y = this.pos.y;
            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > this.maxWidth && n > 0) {
                    context.fillText(line, this.pos.x, y);
                    line = words[n] + ' ';
                    y += this.lineHeight;
                }
                else {
                    line = testLine;
                }
            }
            context.fillText(line, this.pos.x, y);
        }
        else {
            var words = this.currentText.split('\n');
            var line = '';
            var y = this.pos.y;
            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;
                if (n > 0) {
                    context.fillText(line, this.pos.x, y);
                    line = words[n] + ' ';
                    y += this.lineHeight;
                }
                else {
                    line = testLine;
                }
            }
            context.fillText(line, this.pos.x, y);
        }
    };
    Dialog.prototype.CompleteDialog = function () {
        this.done = true;
        clearInterval(this.interval);
        for (var i = this.currentChar; i < this.data.text.string.length; i++) {
            this.currentText += this.data.text.string[this.currentChar];
            this.currentChar++;
        }
    };
    Dialog.prototype.Clear = function () {
        clearInterval(this.interval);
    };
    return Dialog;
}());
//# sourceMappingURL=Dialog.js.map