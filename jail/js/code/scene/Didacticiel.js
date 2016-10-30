var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LevelDidacticiel = (function (_super) {
    __extends(LevelDidacticiel, _super);
    function LevelDidacticiel() {
        _super.call(this);
        this.dialogManager.Load('jail/json/dialog/levelDidacticiel.json');
    }
    LevelDidacticiel.prototype.StartChild = function () {
        this.InitOrder();
        this.timer = new Timer(1000, 60, this);
    };
    LevelDidacticiel.prototype.InitOrder = function () {
        this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/orderDidacticiel.json');
    };
    LevelDidacticiel.prototype.Spawn = function (currentTime) {
        this.spawnOrderManager.Exec(currentTime);
    };
    LevelDidacticiel.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
    };
    LevelDidacticiel.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
    };
    LevelDidacticiel.prototype.UpdateNoStarted = function (delta) {
        _super.prototype.UpdateNoStarted.call(this, delta);
    };
    LevelDidacticiel.prototype.DrawNoStarted = function (context) {
        _super.prototype.DrawNoStarted.call(this, context);
    };
    return LevelDidacticiel;
}(MainScene));
//# sourceMappingURL=Didacticiel.js.map