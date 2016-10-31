var Sprite = (function () {
    function Sprite(image, name, type, pos) {
        this.image = image;
        this.name = name;
        this.type = type;
        this.pos = pos;
        this.offset = { x: 0, y: 0 };
        this.spriteManager = undefined;
        this.scale = { x: 1.0, y: 1.0 };
        this.angle = 0;
        this.zone = undefined;
        this.clickable = undefined;
        this.movable = undefined;
        this.collidersPoint = [];
    }
    Sprite.prototype.Update = function (deltaTime) {
        if (this.clickable) {
            this.clickable.ClickIn(this);
        }
        if (this.movable) {
            var infos = this.movable.Update(this.pos, this.angle);
            this.pos = infos.pos;
            this.angle = infos.angle;
        }
    };
    Sprite.prototype.Draw = function (context) {
        if (this.image != undefined) {
            if (this.zone) {
                this.DrawSpriteSheet(context);
            }
            else {
                context.drawImage(this.image, this.pos.x, this.pos.y);
            }
        }
        for (var key in this.collidersPoint) {
            this.collidersPoint[key].Update(this.pos, this.angle);
        }
    };
    Sprite.prototype.DrawSpriteSheet = function (context) {
        context.save();
        context.translate(this.pos.x, this.pos.y);
        context.rotate(this.angle);
        context.drawImage(this.image, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -(this.zone.width / 2) + this.offset.x, -(this.zone.height / 2) + this.offset.y, this.zone.width, this.zone.height);
        context.restore();
    };
    Sprite.prototype.Clear = function () {
        delete this.offset;
    };
    Sprite.prototype.SetPos = function (pos) {
        this.pos = pos;
    };
    Sprite.prototype.SetZone = function (zone) {
        this.zone = zone;
    };
    Sprite.prototype.SetClickable = function (size, offset, event) {
        this.clickable = new Clickable(this.pos, offset, size);
        if (event) {
            this.clickable.SetClickEvent(event);
        }
    };
    Sprite.prototype.SetMovable = function (speed, speedAngle) {
        this.movable = new Movable(speed, speedAngle);
    };
    Sprite.prototype.SetCollider = function () {
        if (this.zone && this.zone.collider) {
            for (var key in this.zone.collider) {
                this.collidersPoint[key] = new PointCollider(this.zone.collider[key].x, this.zone.collider[key].y);
            }
        }
    };
    Sprite.prototype.SetOffset = function (offset) {
        this.offset = offset;
    };
    return Sprite;
}());
//# sourceMappingURL=Sprite.js.map