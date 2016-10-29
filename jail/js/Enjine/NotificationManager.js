var NotificationManager = (function () {
    function NotificationManager() {
        this.listNotification = [];
    }
    NotificationManager.prototype.Init = function () {
    };
    NotificationManager.prototype.Update = function () {
    };
    NotificationManager.prototype.Draw = function (context) {
        for (var key in this.listNotification) {
            this.listNotification[key].Draw(context);
        }
    };
    NotificationManager.prototype.Add = function (notification) {
        this.listNotification.push(notification);
    };
    NotificationManager.prototype.Remove = function (notification) {
        for (var i = 0; i < this.listNotification.length; i++) {
            if (notification === this.listNotification[i]) {
                notification.Clear();
                this.listNotification.splice(i, 1);
            }
        }
    };
    NotificationManager.prototype.Clear = function () {
    };
    return NotificationManager;
}());
//# sourceMappingURL=NotificationManager.js.map