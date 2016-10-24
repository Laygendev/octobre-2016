/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/
var EventMouse;
(function (EventMouse) {
    var Mouse = (function () {
        function Mouse() {
        }
        Mouse.Event = function (canvas) {
            var _this = this;
            canvas.addEventListener('mousemove', function (event) { _this.MouseMove(canvas, event); });
            canvas.addEventListener('mousedown', function (event) { _this.MouseDown(canvas, event); });
            canvas.addEventListener('mouseup', function (event) { _this.MouseUp(event); });
        };
        ;
        Mouse.MouseMove = function (canvas, event) {
            var Rect = canvas.getBoundingClientRect();
            this.move.x = event.clientX - Rect.left;
            this.move.y = event.clientY - Rect.top;
        };
        ;
        Mouse.MouseDown = function (canvas, event) {
            var Rect = canvas.getBoundingClientRect();
            this.click.x = event.clientX - Rect.left;
            this.click.y = event.clientY - Rect.top;
            this.isClicked = true;
        };
        ;
        Mouse.MouseUp = function (event) {
            this.isClicked = false;
        };
        ;
        Mouse.click = { x: 0, y: 0 };
        Mouse.move = { x: 0, y: 0 };
        Mouse.isClicked = false;
        return Mouse;
    })();
    EventMouse.Mouse = Mouse;
})(EventMouse || (EventMouse = {}));
//# sourceMappingURL=EventMouse.js.map