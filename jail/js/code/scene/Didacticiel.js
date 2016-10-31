var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneDidacticiel = (function (_super) {
    __extends(SceneDidacticiel, _super);
    function SceneDidacticiel() {
        _super.call(this);
        this.dialogManager.Load('jail/json/dialog/levelDidacticiel.json');
    }
    SceneDidacticiel.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.spawnOrderManager = new SpawnOrderManager('jail/json/level/orderDidacticiel.json', this.orderManager, this.spawnManager);
        this.countdown.SetObjectToCall(this.spawnOrderManager);
        this.countdown.SetObjectToCall(this.spawnManager);
        this.countdown.Start(60);
    };
    SceneDidacticiel.prototype.Update = function (delta) {
        _super.prototype.Update.call(this, delta);
    };
    SceneDidacticiel.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
    };
    return SceneDidacticiel;
}(MainScene));
//# sourceMappingURL=Didacticiel.js.map