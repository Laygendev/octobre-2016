var Notification = (function () {
    function Notification(text, pos, size) {
        this.text = text;
        this.pos = pos;
        this.size = size;
        this.maxWidth = 300;
        this.lineHeight = 10;
        this.maxWidth = this.size.width;
    }
    Notification.prototype.Draw = function (context) {
        context.save();
        context.fillStyle = "white";
        context.translate(this.pos.x, this.pos.y);
        context.fillRect(0, 0, this.size.width, this.size.height);
        context.fillStyle = "black";
        context.font = "14px Source Sans Pro Bold";
        context.fillText(this.text, this.pos.x, this.pos.y);
        context.restore();
    };
    Notification.prototype.Update = function () {
    };
    Notification.prototype.ClickIn = function () {
    };
    Notification.prototype.Clear = function () {
    };
    return Notification;
}());
//# sourceMappingURL=Notification.js.map