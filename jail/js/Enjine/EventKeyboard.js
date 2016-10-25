var EventKeyboard;
(function (EventKeyboard) {
    var Input = (function () {
        function Input() {
        }
        Input.Event = function (canvas) {
            document.onkeydown = function (event) { EventKeyboard.Input.KeyDownEvent(event); };
            document.onkeyup = function (event) { EventKeyboard.Input.KeyUpEvent(event); };
        };
        ;
        Input.IsKeyDown = function (key) {
            if (this.pressedKeys[key] != null)
                return this.pressedKeys[key];
            return false;
        };
        ;
        Input.KeyDownEvent = function (event) {
            this.pressedKeys[event.keyCode] = true;
            this.PreventScrolling(event);
        };
        ;
        Input.KeyUpEvent = function (event) {
            this.pressedKeys[event.keyCode] = false;
            this.PreventScrolling(event);
        };
        ;
        Input.PreventScrolling = function (event) {
            if (event.keyCode >= 37 && event.keyCode <= 40) {
                event.preventDefault();
            }
        };
        return Input;
    }());
    Input.keys = { "left": 37, "right": 39 };
    Input.pressedKeys = { "left": false, "right": false };
    EventKeyboard.Input = Input;
})(EventKeyboard || (EventKeyboard = {}));
//# sourceMappingURL=EventKeyboard.js.map