/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

module Helper {
  export class DrawImage {
    static Draw(name: string, context: any): void {
			let x = 0;
			let y = 0;

			if (Data.Object.humanParts[name]) {
				if (Data.Object.humanParts[name].type == "arml") {
					y = 110;
				}
				if (Data.Object.humanParts[name].type == "armr") {
					y = 110;
					x = 85;
				}
				if (Data.Object.humanParts[name].type == "leg") {
					y = 190;
					x = 22;
				}
				context.drawImage(Data.Images.spriteSheet,
		      Data.Object.humanParts[name].x,
		      Data.Object.humanParts[name].y,
		      Data.Object.humanParts[name].width,
		      Data.Object.humanParts[name].height,
					x,
					y,
		      Data.Object.humanParts[name].width,
		      Data.Object.humanParts[name].height);
			}
			else {
				y = 100;
				x = 30;
				context.drawImage(Data.Images.spriteSheet,
		      Data.Object.bodies[name].x,
		      Data.Object.bodies[name].y,
		      Data.Object.bodies[name].width,
		      Data.Object.bodies[name].height,
					x,
					y,
		      Data.Object.bodies[name].width,
		      Data.Object.bodies[name].height);
			}

    };
  }
}
