/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

module EventMouse {
  export class Mouse {
    static pressedClics: any = {"left": false, "right": false};
    static click: any = {x: 0, y: 0};
    static move: any = {x: 0, y: 0};
    static isClicked: boolean = false;

    static Event(canvas: any): void {
      canvas.addEventListener('mousemove', (event: any) => { this.MouseMove(canvas, event); });
      canvas.addEventListener('mousedown', (event: any) => { this.MouseDown(canvas, event); });
      canvas.addEventListener('mouseup', (event: any) => { this.MouseUp(event); });
			window.oncontextmenu = function() { return false; };
    };

    static MouseMove(canvas: any, event: any): void {
      var Rect = canvas.getBoundingClientRect();

      this.move.x = event.clientX - Rect.left;
      this.move.y = event.clientY - Rect.top;
    };

    static MouseDown(canvas: any, event: any): void {
      var Rect = canvas.getBoundingClientRect();

      this.click.x = event.clientX - Rect.left;
      this.click.y = event.clientY - Rect.top;

			switch (event.which) {
				case 1:
					this.pressedClics['left'] = true;
					this.pressedClics['right'] = false;
					break;
				case 3:
					this.pressedClics['left'] = false;
					this.pressedClics['right'] = true;
					break;
			}

      if (SceneManager.Manager.currentScene && SceneManager.Manager.currentScene.dialogManager) {
        SceneManager.Manager.currentScene.dialogManager.MouseDown(event);
      }

      this.isClicked = true;
    };

    static MouseUp(event: any): void {
			this.pressedClics['left'] = false;
			this.pressedClics['right'] = false;
      this.isClicked = false;
    };
  }
}
