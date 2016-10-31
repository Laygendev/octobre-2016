var Clickable = (function () {
    function Clickable(zone) {
        this.zone = zone;
        this.clickEvent = [];
    }
    Clickable.prototype.ClickIn = function () {
        if (EventMouse.Mouse.isClicked &&
            EventMouse.Mouse.click.x > this.zone.x && EventMouse.Mouse.click.x < this.zone.x + this.zone.w &&
            EventMouse.Mouse.click.y > this.zone.y && EventMouse.Mouse.click.y < this.zone.y + this.zone.h) {
            for (var key in this.clickEvent) {
                this.clickEvent[key].Exec();
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
//# sourceMappingURL=SpriteClickable.js.map