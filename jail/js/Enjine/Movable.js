var Movable = (function () {
    function Movable(speed, speedAngle) {
        this.speed = speed;
        this.speedAngle = speedAngle;
    }
    Movable.prototype.Update = function (pos, angle) {
        pos.x = pos.x + this.speed * Math.cos(angle);
        pos.y = pos.y + this.speed * Math.sin(angle);
        angle += this.speedAngle;
        return {
            pos: pos,
            angle: angle
        };
    };
    Movable.prototype.Clear = function () {
    };
    return Movable;
}());
//# sourceMappingURL=Movable.js.map