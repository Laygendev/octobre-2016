/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

module Helper {
  export class DrawImage {
    static Draw(name: string, context: any): void {
			let x = 0;
			let y = 0;
			if (Data.Ressources.humanPart[name]) {
				if (Data.Ressources.humanPart[name].type == "arml") {
					y = 110;
				}
				if (Data.Ressources.humanPart[name].type == "armr") {
					y = 110;
					x = 85;
				}
				if (Data.Ressources.humanPart[name].type == "leg") {
					y = 190;
					x = 22;
				}
				context.drawImage(Data.Ressources.spriteSheet,
		      Data.Ressources.humanPart[name].x,
		      Data.Ressources.humanPart[name].y,
		      Data.Ressources.humanPart[name].width,
		      Data.Ressources.humanPart[name].height,
					x,
					y,
		      Data.Ressources.humanPart[name].width,
		      Data.Ressources.humanPart[name].height);
			}
			else {
				y = 100;
				x = 30;
				context.drawImage(Data.Ressources.spriteSheet,
		      Data.Ressources.bodies[name].x,
		      Data.Ressources.bodies[name].y,
		      Data.Ressources.bodies[name].width,
		      Data.Ressources.bodies[name].height,
					x,
					y,
		      Data.Ressources.bodies[name].width,
		      Data.Ressources.bodies[name].height);
			}

    };
  }
}
