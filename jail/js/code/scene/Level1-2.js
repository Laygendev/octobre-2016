var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Level12 = (function (_super) {
    __extends(Level12, _super);
    function Level12() {
        _super.call(this);
        this.dialogManager.Load('jail/json/dialog/level12.json');
    }
    Level12.prototype.StartChild = function () {
        this.InitOrder();
        this.timer = new Timer(1000, 120, this);
    };
    Level12.prototype.InitOrder = function () {
        this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/order1-2.json');
    };
    Level12.prototype.Spawn = function (currentTime) {
        this.spawnOrderManager.Exec(currentTime);
    };
    Level12.prototype.DrawChildScene = function (context) {
        this.orderManager.Draw(context);
    };
    Level12.prototype.UpdateNoStarted = function (delta) {
    };
    Level12.prototype.DrawNoStarted = function (context) {
        if (this.dialogManager) {
            this.dialogManager.Draw(context);
        }
    };
    return Level12;
}(MainScene));
//# sourceMappingURL=Level1-2.js.map