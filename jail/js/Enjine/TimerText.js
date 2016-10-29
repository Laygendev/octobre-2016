var TimerText = (function () {
    function TimerText(text, speedText, pos) {
        var _this = this;
        this.text = text;
        this.pos = pos;
        this.currentText = "";
        this.currentChar = 0;
        this.interval = setInterval(function () { _this.Update(); }, speedText);
    }
    TimerText.prototype.Update = function () {
        if (this.currentChar < this.text.length) {
            this.currentText += this.text[this.currentChar];
            this.currentChar++;
        }
    };
    TimerText.prototype.Draw = function (context) {
        context.font = "30px Source Sans Pro Bold";
        context.fillText(this.currentText, this.pos.x, this.pos.y);
    };
    return TimerText;
}());
//# sourceMappingURL=TimerText.js.map