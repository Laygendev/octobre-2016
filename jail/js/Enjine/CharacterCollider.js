var CharacterCollider = (function () {
    function CharacterCollider(Rect) {
        this.Rect = Rect;
        this.pos = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
        this.angle = 0;
        this.speedAngle = 0.5728;
    }
    CharacterCollider.prototype.Update = function (parentX, parentY) {
        this.pos[0].x = parentX + this.Rect[0].x;
        this.pos[0].y = parentY + this.Rect[0].y;
        this.pos[1].x = parentX + this.Rect[1].x;
        this.pos[1].y = parentY + this.Rect[1].y;
        this.pos[2].x = parentX + this.Rect[2].x;
        this.pos[2].y = parentY + this.Rect[2].y;
        this.pos[3].x = parentX + this.Rect[3].x;
        this.pos[3].y = parentY + this.Rect[3].y;
        this.angle += this.speedAngle;
        this.Rotate(parentX, parentY);
    };
    CharacterCollider.prototype.Rotate = function (parentX, parentY) {
        for (var i = 0; i < 4; i++) {
            var A = this.pos[i];
            this.pos[i] = this.RotatePoint(A, { x: parentX, y: parentY });
        }
    };
    CharacterCollider.prototype.RotatePoint = function (point, parent) {
        var angle = this.angle * Math.PI / 180.0;
        return {
            x: Math.cos(angle) * (point.x - parent.x) - Math.sin(angle) * (point.y - parent.y) + parent.x,
            y: Math.sin(angle) * (point.x - parent.x) + Math.cos(angle) * (point.y - parent.y) + parent.y
        };
    };
    CharacterCollider.prototype.Draw = function (context) {
        context.beginPath();
        for (var i = 0; i < 4; i++) {
            var A = this.pos[i];
            var nextI = i;
            nextI++;
            if (nextI >= 4) {
                nextI = 0;
            }
            var B = this.pos[nextI];
            context.moveTo(A.x, A.y);
            context.lineTo(B.x, B.y);
        }
        context.stroke();
    };
    CharacterCollider.prototype.CheckCollider = function (parent, listSprite, zone) {
        for (var type in listSprite) {
            for (var key in listSprite[type]) {
                if (this.OnEnter(listSprite[type][key].colliderPoint, zone)) {
                    return {
                        sprite: listSprite[type][key],
                        zone: zone
                    };
                }
            }
        }
        return undefined;
    };
    CharacterCollider.prototype.OnEnter = function (colliderPoint, zone) {
        var collider = true;
        if (!colliderPoint)
            return false;
        if (this.pos[0].x == 0)
            return false;
        for (var i = 0; i < 4; i++) {
            var A = this.pos[i];
            var nextI = i;
            nextI++;
            if (nextI >= 4) {
                nextI = 0;
            }
            var B = this.pos[nextI];
            var D = { X: 0, Y: 0 };
            var T = { X: 0, Y: 0 };
            D.X = B.x - A.x;
            D.Y = B.y - A.y;
            T.X = colliderPoint.pos.x - A.x;
            T.Y = colliderPoint.pos.y - A.y;
            var d = D.X * T.Y - D.Y * T.X;
            if (d < 0) {
                collider = false;
                return false;
            }
            if (!collider) {
                break;
            }
        }
        if (collider) {
            return true;
        }
    };
    return CharacterCollider;
}());
//# sourceMappingURL=CharacterCollider.js.map