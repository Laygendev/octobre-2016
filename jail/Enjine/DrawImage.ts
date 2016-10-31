/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

module Helper {
  export class DrawImage {
    static Draw(name: string, context: any): void {
			let x = 0;
			let y = 0;
			if (Data.Images.humanParts[name]) {
				if (Data.Images.humanParts[name].type == "arml") {
					y = 110;
				}
				if (Data.Images.humanParts[name].type == "armr") {
					y = 110;
					x = 85;
				}
				if (Data.Images.humanParts[name].type == "leg") {
					y = 190;
					x = 22;
				}
				context.drawImage(Data.Images.spriteSheet,
		      Data.Images.humanParts[name].x,
		      Data.Images.humanParts[name].y,
		      Data.Images.humanParts[name].width,
		      Data.Images.humanParts[name].height,
					x,
					y,
		      Data.Images.humanParts[name].width,
		      Data.Images.humanParts[name].height);
			}
			else {
				y = 100;
				x = 30;
				context.drawImage(Data.Images.spriteSheet,
		      Data.Images.bodies[name].x,
		      Data.Images.bodies[name].y,
		      Data.Images.bodies[name].width,
		      Data.Images.bodies[name].height,
					x,
					y,
		      Data.Images.bodies[name].width,
		      Data.Images.bodies[name].height);
			}

    };
  }
}
