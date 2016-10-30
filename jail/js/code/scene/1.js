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
    }
    Level11.prototype.StartChild = function () {
        this.InitOrder();
        this.timer = new Timer(1000, 120, this);
    };
    Level11.prototype.InitOrder = function () {
        this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/order1-1.json');
    };
    Level11.prototype.Spawn = function (currentTime) {
        this.spawnOrderManager.Exec(currentTime);
    };
    Level11.prototype.DrawChildScene = function (context) {
        this.orderManager.Draw(context);
    };
    Level11.prototype.UpdateNoStarted = function (delta) {
    };
    Level11.prototype.DrawNoStarted = function (context) {
        if (this.dialogManager) {
            this.dialogManager.Draw(context);
        }
    };
    return Level11;
}(MainScene));
//# sourceMappingURL=1.js.map