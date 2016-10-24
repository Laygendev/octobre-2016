/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteClickable extends Sprite {

  constructor(public image: any, public x: number, public y:number, public zone: any, public type: string) {
    super(x, y, zone, type);
  }

  public Update():void {

  }

	public Draw(context: any):void {
		context.drawImage(this.image, this.x, this.y);
	}


	public ClickIn():boolean {
		if (EventMouse.Mouse.isClicked &&
				EventMouse.Mouse.click.x > this.x && EventMouse.Mouse.click.x < this.x + this.zone.width &&
				EventMouse.Mouse.click.y > this.y && EventMouse.Mouse.click.y < this.y + this.zone.height) {
					return true;
				}
		return false;
	}
}
