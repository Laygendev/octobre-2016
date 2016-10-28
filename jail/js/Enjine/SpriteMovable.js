/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteMovable = (function (_super) {
    __extends(SpriteMovable, _super);
    function SpriteMovable(x, y, zone, zoneType, speed, angle, speedAngle, name) {
        _super.call(this, x, y, zone, zoneType, name);
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.speed = speed;
        this.angle = angle;
        this.speedAngle = speedAngle;
        this.name = name;
    }
    SpriteMovable.prototype.Update = function () {
        this.x = this.x + this.speed * Math.cos(this.angle);
        this.y = this.y + this.speed * Math.sin(this.angle);
        this.angle += this.speedAngle;
        for (var key in this.colliderPoint) {
            this.colliderPoint[key].Update(this.x, this.y, this.angle);
        }
    };
    SpriteMovable.prototype.Draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.drawImage(Data.Ressources.spriteSheet, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -(this.zone.width / 2) + this.offset.x, -(this.zone.height / 2) + this.offset.y, this.zone.width, this.zone.height);
        context.restore();
        for (var key in this.colliderPoint) {
            this.colliderPoint[key].Draw(context);
        }
    };
    return SpriteMovable;
})(Sprite);
//# sourceMappingURL=SpriteMovable.js.map