/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var ColliderPoint = (function () {
    function ColliderPoint(localX, localY) {
        this.localX = localX;
        this.localY = localY;
        this.pos = { x: 0, y: 0 };
        this.angle = 0;
        this.speedAngle = 0.5728;
    }
    ColliderPoint.prototype.Update = function (parentX, parentY, parentAngle) {
        this.pos.x = parentX - 0.5 + this.localX;
        this.pos.y = parentY - 0.5 + this.localY;
        this.angle = parentAngle * 57.3;
        this.pos = this.RotatePoint(this.pos, { x: parentX, y: parentY });
    };
    ColliderPoint.prototype.RotatePoint = function (point, parent) {
        var angle = this.angle * Math.PI / 180.0;
        return {
            x: Math.cos(angle) * (point.x - parent.x) - Math.sin(angle) * (point.y - parent.y) + parent.x,
            y: Math.sin(angle) * (point.x - parent.x) + Math.cos(angle) * (point.y - parent.y) + parent.y
        };
    };
    ColliderPoint.prototype.Draw = function (context) {
        context.fillRect(this.pos.x, this.pos.y, 1, 1);
    };
    ColliderPoint.prototype.Clear = function () {
        delete this.pos;
    };
    return ColliderPoint;
})();
//# sourceMappingURL=ColliderPoint.js.map