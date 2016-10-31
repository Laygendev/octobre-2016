var PointCollider = (function () {
    function PointCollider(localX, localY) {
        this.localX = localX;
        this.localY = localY;
        this.pos = { x: 0, y: 0 };
        this.angle = 0;
    }
    PointCollider.prototype.Update = function (parentPos, parentAngle) {
        this.pos.x = parentPos.x - 0.5 + this.localX;
        this.pos.y = parentPos.y - 0.5 + this.localY;
        this.angle = parentAngle * 57.3;
        this.pos = this.RotatePoint(this.pos, { x: parentPos.x, y: parentPos.y });
    };
    PointCollider.prototype.RotatePoint = function (point, parentPos) {
        var angle = this.angle * Math.PI / 180.0;
        return {
            x: Math.cos(angle) * (point.x - parentPos.x) - Math.sin(angle) * (point.y - parentPos.y) + parentPos.x,
            y: Math.sin(angle) * (point.x - parentPos.x) + Math.cos(angle) * (point.y - parentPos.y) + parentPos.y
        };
    };
    PointCollider.prototype.Draw = function (context) {
        context.fillRect(this.pos.x, this.pos.y, 1, 1);
    };
    PointCollider.prototype.Clear = function () {
        delete this.pos;
    };
    return PointCollider;
}());
//# sourceMappingURL=PointCollider.js.map