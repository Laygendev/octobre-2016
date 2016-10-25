/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

module EventKeyboard {
  export class Input {
    static keys: any = {"left": 37, "right": 39};
    static pressedKeys: any = {"left": false, "right": false};

    static Event(canvas: any): void {
      document.onkeydown = function(event) { EventKeyboard.Input.KeyDownEvent(event); }
      document.onkeyup = function(event) { EventKeyboard.Input.KeyUpEvent(event); }
    };

    static IsKeyDown(key: string):boolean {
      if (this.pressedKeys[key] != null)
      return this.pressedKeys[key];
      return false;
    };

    static KeyDownEvent (event: any): void {
      this.pressedKeys[event.keyCode] = true;
      this.PreventScrolling(event);
    };

    static KeyUpEvent(event: any): void {
      this.pressedKeys[event.keyCode] = false;
      this.PreventScrolling(event);
    };

    static PreventScrolling(event: any):void {
      // 37: left, 38: up, 39: right, 40: down
      if(event.keyCode >= 37 && event.keyCode <= 40){
        event.preventDefault();
      }
    }
  }
}
