/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Clickable {
	private clickEvent: any = [];

	constructor(public pos: any, public offset:any, public size: any) {}

	public ClickIn(triggerElement: any):boolean {
		if (EventMouse.Mouse.isClicked &&
			EventMouse.Mouse.click.x > this.pos.x - this.offset.x && EventMouse.Mouse.click.x < this.pos.x - this.offset.x + this.size.w &&
			EventMouse.Mouse.click.y > this.pos.y - this.offset.y && EventMouse.Mouse.click.y < this.pos.y - this.offset.y + this.size.h) {
				for (var key in this.clickEvent) {
					this.clickEvent[key](triggerElement);
				}

				return true;
			}

		return false;
	}

	public SetClickEvent(clickEvent: any):void {
		this.clickEvent.push(clickEvent);
	}

	public Clear():void {}

}
