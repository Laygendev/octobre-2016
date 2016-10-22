var ColliderPoint = (function () {
    function ColliderPoint(localX, localY) {
        this.localX = localX;
        this.localY = localY;
        this.pos = { x: 0, y: 0 };
    }
    ColliderPoint.prototype.Update = function (parentX, parentY) {
        this.pos.x = parentX - 0.5 + this.localX;
        this.pos.y = parentY - 0.5 + this.localY;
    };
    ColliderPoint.prototype.Draw = function (context) {
        context.fillRect(this.pos.x, this.pos.y, 1, 1);
    };
    return ColliderPoint;
}());
//# sourceMappingURL=ColliderPoint.js.map