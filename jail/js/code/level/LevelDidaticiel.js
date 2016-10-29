var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LevelDidacticiel = (function (_super) {
    __extends(LevelDidacticiel, _super);
    function LevelDidacticiel() {
        var _this = _super.call(this) || this;
        _this.InitOrder();
        _this.timer = new Timer(1000, 25, _this);
        return _this;
    }
    LevelDidacticiel.prototype.InitOrder = function () {
        this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/orderDidacticiel.json');
    };
    LevelDidacticiel.prototype.Spawn = function (currentTime) {
        this.spawnOrderManager.Exec(currentTime);
    };
    LevelDidacticiel.prototype.DrawChildScene = function (context) {
        this.orderManager.Draw(context);
    };
    return LevelDidacticiel;
}(MainScene));
//# sourceMappingURL=LevelDidaticiel.js.map