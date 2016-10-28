var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Level11 = (function (_super) {
    __extends(Level11, _super);
    function Level11(selectedBody) {
        var _this = _super.call(this, selectedBody) || this;
        _this.selectedBody = selectedBody;
        _this.spawnOrderManager = undefined;
        _this.InitOrder();
        return _this;
    }
    Level11.prototype.InitOrder = function () {
        this.spawnOrderManager = new SpawnOrderManager(this.spriteManager, this.orderManager, 'jail/json/level/order1-1.json');
    };
    Level11.prototype.Spawn = function (currentTime) {
        this.spawnOrderManager.Exec(currentTime);
    };
    Level11.prototype.UpdateChildScene = function (delta) {
        if (this.character) {
            if (this.character.can.delivery) {
                var order = this.character.CheckElement(this.orderManager);
                if (order) {
                    order.SetCharacter(this.character);
                    this.character.Clear();
                    this.point.Add(20);
                    delete this.character;
                }
            }
        }
    };
    Level11.prototype.DrawChildScene = function (context) {
        this.orderManager.Draw(context);
    };
    Level11.prototype.Clear = function () {
    };
    return Level11;
}(MainScene));
//# sourceMappingURL=Level1-1.js.map