var Clickable = (function () {
    function Clickable(pos, offset, size) {
        this.pos = pos;
        this.offset = offset;
        this.size = size;
        this.clickEvent = [];
    }
    Clickable.prototype.ClickIn = function (triggerElement) {
        if (EventMouse.Mouse.isClicked &&
            EventMouse.Mouse.click.x > this.pos.x - this.offset.x && EventMouse.Mouse.click.x < this.pos.x - this.offset.x + this.size.w &&
            EventMouse.Mouse.click.y > this.pos.y - this.offset.y && EventMouse.Mouse.click.y < this.pos.y - this.offset.y + this.size.h) {
            for (var key in this.clickEvent) {
                this.clickEvent[key](triggerElement);
            }
            return true;
        }
        return false;
    };
    Clickable.prototype.SetClickEvent = function (clickEvent) {
        this.clickEvent.push(clickEvent);
    };
    Clickable.prototype.Clear = function () { };
    return Clickable;
}());
//# sourceMappingURL=Clickable.js.map