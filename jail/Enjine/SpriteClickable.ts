/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteClickable extends Sprite {
	private speedAngle: number = 0.01;
	public angle: number = 0;
	public currentImage: any;

	constructor(public image: any, public x: number, public y:number, public zone: any, public type: string, public name: string, public imageHover: any) {
		super(x, y, zone, type, name);
		this.currentImage = this.image;
	}

	public Update():void {
		if (this.image != undefined ) {
			this.MouseIn();
		}
	}

	public Draw(context: any):void {
		if (this.image != undefined) {
			context.drawImage(this.currentImage, this.x, this.y);
		}
		else {
			context.save();
			context.translate(this.x + (this.zone.width / 2), this.y + (this.zone.height / 2));
			context.rotate(this.angle); //increment the angle and rotate the image

			context.drawImage(Data.Ressources.spriteSheet,
				this.zone.x,
				this.zone.y,
				this.zone.width,
				this.zone.height,
				-(this.zone.width / 2),
				-(this.zone.height / 2),
				this.zone.width,
				this.zone.height);

				context.restore();
			}
		}

		public MouseIn():void {
			if (EventMouse.Mouse.move.x > this.x && EventMouse.Mouse.move.x < this.x + this.zone.width &&
				EventMouse.Mouse.move.y > this.y && EventMouse.Mouse.move.y < this.y + this.zone.height) {
					if (this.imageHover) {
						this.currentImage = this.imageHover;
					}
				}
				else {
					this.currentImage = this.image;
				}
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
