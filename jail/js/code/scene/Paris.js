var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Paris = (function (_super) {
    __extends(Paris, _super);
    function Paris() {
        _super.call(this);
        this.dialogManager.Load('jail/json/dialog/level11.json');
    }
    Paris.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.spawnOrderManager = new SpawnOrderManager('jail/json/level/order1-1.json', this.orderManager, this.spawnManager);
        this.countdown.SetObjectToCall(this.spawnOrderManager);
        this.countdown.SetObjectToCall(this.spawnManager);
        this.countdown.Start(120);
    };
    Paris.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
    };
    Paris.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
    };
    return Paris;
}(MainScene));
//# sourceMappingURL=Paris.js.map