/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteClickable extends Sprite {
	private speedAngle: number = 0.01;
	public angle: number = 0;
	public currentImage: any;

	constructor(public image: any, public name: string, public type: string, public pos: any, public zoneClickable: any) {
		super(image, name, type, pos);
		this.currentImage = this.image;
	}

	protected Update(deltaTime: number):void {}

	public Draw(context: any):void {
		if (this.image != undefined) {
			context.drawImage(this.currentImage, this.pos.x, this.pos.y);
		}
	}

	public ClickIn():boolean {
		if (EventMouse.Mouse.isClicked &&
			EventMouse.Mouse.click.x > this.pos.x && EventMouse.Mouse.click.x < this.pos.x + this.zoneClickable.width &&
			EventMouse.Mouse.click.y > this.pos.y && EventMouse.Mouse.click.y < this.pos.y + this.zoneClickable.height) {
				return true;
			}

		return false;
	}

	public Clear():void {

	}

}
