/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

module EventMouse {
  export class Mouse {
    static click: any = {x: 0, y: 0};
    static move: any = {x: 0, y: 0};
    static isClicked: boolean = false;

    static Event(canvas: any): void {
      canvas.addEventListener('mousemove', (event: any) => { this.MouseMove(canvas, event); });
      canvas.addEventListener('mousedown', (event: any) => { this.MouseDown(canvas, event); });
      canvas.addEventListener('mouseup', (event: any) => { this.MouseUp(event); });
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

      this.isClicked = true;
    };

    static MouseUp(event: any): void {
      this.isClicked = false;
    };
  }
}
