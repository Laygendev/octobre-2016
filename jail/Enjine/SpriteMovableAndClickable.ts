/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteMovableAndClickable extends Sprite {

  constructor(public x: number, public y:number, public zone: any, zoneType: any, public speed: number, public angle: number, public speedAngle: number, public name: string) {
    super(x, y, zone, zoneType, name);
  }

  public Update():void {
    this.x = this.x + this.speed * Math.cos(this.angle);
    this.y = this.y + this.speed * Math.sin(this.angle);
    this.angle += this.speedAngle;

    for (var key in this.colliderPoint) {
      this.colliderPoint[key].Update(this.x, this.y, this.angle);
    }
  }

  public Draw(context: any):void {
    context.save();

    context.drawImage(Data.Ressources.spriteSheet,
      this.zone.x,
      this.zone.y,
      this.zone.width,
      this.zone.height,
      this.x,
    	this.y,
      this.zone.width,
      this.zone.height);
  }


	public MouseIn():void {
		if (EventMouse.Mouse.move.x > this.x && EventMouse.Mouse.move.x < this.x + this.zone.width &&
			EventMouse.Mouse.move.y > this.y && EventMouse.Mouse.move.y < this.y + this.zone.height) {
				this.speedAngle = 2;
			}
			else {
				this.speedAngle = 0.02;
			}
		}

		public ClickIn():boolean {
			if (EventMouse.Mouse.isClicked &&
				EventMouse.Mouse.click.x > this.x && EventMouse.Mouse.click.x < this.x + this.zone.width &&
				EventMouse.Mouse.click.y > this.y && EventMouse.Mouse.click.y < this.y + this.zone.height) {
          Data.Sound.PlaySound('takeBody', false);
					return true;
				}
				return false;
			}
}
