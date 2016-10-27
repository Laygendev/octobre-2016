/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

module Helper {
  export class DrawImage {
    static Draw(name: string, context: any, x: number, y: number): void {
			if (Data.Ressources.humanPart[name]) {
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
