var Dialog = (function () {
    function Dialog(text, speedText, pos) {
        var _this = this;
        this.text = text;
        this.pos = pos;
        this.currentText = "";
        this.currentChar = 0;
        this.maxWidth = 500;
        this.lineHeight = 30;
        this.done = false;
        this.interval = setInterval(function () { _this.Update(); }, speedText);
    }
    Dialog.prototype.Update = function () {
        if (this.currentChar < this.text.length) {
            this.currentText += this.text[this.currentChar];
            this.currentChar++;
        }
        else {
            this.done = true;
        }
    };
    Dialog.prototype.Draw = function (context) {
        context.fillStyle = "black";
        context.font = "30px Source Sans Pro Bold";
        var words = this.currentText.split(' ');
        var line = '';
        var y = 0;
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > this.maxWidth && n > 0) {
                context.fillText(line, this.pos.x, this.pos.y + y);
                line = words[n] + ' ';
                y += this.lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, this.pos.x, y);
    };
    Dialog.prototype.CompleteDialog = function () {
        this.done = true;
        clearInterval(this.interval);
        for (var i = this.currentChar; i < this.text.length; i++) {
            this.currentText += this.text[this.currentChar];
            this.currentChar++;
        }
    };
    Dialog.prototype.Clear = function () {
        clearInterval(this.interval);
    };
    return Dialog;
}());
//# sourceMappingURL=Dialog.js.map