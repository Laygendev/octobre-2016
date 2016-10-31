var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Level11 = (function (_super) {
    __extends(Level11, _super);
    function Level11() {
        _super.call(this);
        this.dialogManager.Load('jail/json/dialog/level11.json');
        this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/order1-1.json');
        this.countdown = new Countdown(120);
    }
    return Level11;
}(MainScene));
//# sourceMappingURL=Paris.js.map