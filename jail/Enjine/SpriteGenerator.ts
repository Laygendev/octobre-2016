/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteGenerator {
  private randomSide: Array<string> = ["top", "bottom", "left", "right"];
  private speedGenerator: any = {min: 0.5, max: 5};
  private randomAngle: any = {min: -0.01, max: 0.01}
  constructor() {}

  Exec(zoneName: string): Sprite {
    // let pos = this.RandomPosition();
    //
		// if (!zoneName) {
	  //   // zoneName = Data.Ressources.RandomHumanPart();
		// }
    //
		// if (Data.Ressources.humanPart[zoneName]) {
	  //   let zone = Data.Ressources.humanPart[zoneName];
	  //   let spriteMovable: SpriteMovable = new SpriteMovable(pos.x, pos.y, zone, zone.type, this.GenerateSpeed(), 0, 0, zoneName);
	  //   spriteMovable.angle = this.RandomAngle(pos.key);
	  //   spriteMovable.speedAngle = this.GenerateSpeedAngle(pos);
	  //   return spriteMovable;
		// }
		// else {
			return undefined;
		// }
  }

  RandomPosition(): any {
    let randomSide = Math.floor(Math.random() * (0 - (this.randomSide.length))) + this.randomSide.length;
    let pos = this.CalculRandomPosition(this.randomSide[randomSide]);

    return {
      key: this.randomSide[randomSide],
      x: Math.random() * (pos.min.x - (pos.max.x)) + pos.max.x,
      y: Math.random() * (pos.min.y - (pos.max.y)) + pos.max.y,
    }
  }

  RandomAngle(key: string): number {
    if (key == "top") {
      return 1.55;
    }
    if (key == "bottom") {
      return 4.7;
    }
    if (key == "left") {
      return 0;
    }
    if (key == "right") {
      return 3.12;
    }


    return 1;
  }

  GenerateSpeed():number {
    return Math.random() * (this.speedGenerator.min - (this.speedGenerator.max)) + this.speedGenerator.max;
  }

  GenerateSpeedAngle(pos: any): number {
    if (pos.key == "top") {
      if (pos.x <= 200) {
        return 0.002;
      }
      else if(pos.x >= global.size.width - 200) {
        return -0.002;
      }
      else {
        return Math.random() * (this.randomAngle.min - (this.randomAngle.max)) + this.randomAngle.max;
      }
    }

    if (pos.key == "bottom") {
      if (pos.x <= 200) {
        return -0.002;
      }
      else if(pos.x >= global.size.width - 200) {
        return 0.002;
      }
      else {
        return Math.random() * (this.randomAngle.min - (this.randomAngle.max)) + this.randomAngle.max;
      }
    }

    if (pos.key == "left") {
      if (pos.y <= 200) {
        return -0.002;
      }
      else if(pos.y >= global.size.height - 200) {
        return 0.002;
      }
      else {
        return Math.random() * (this.randomAngle.min - (this.randomAngle.max)) + this.randomAngle.max;
      }
    }

    if (pos.key == "right") {
      if (pos.y <= 200) {
        return 0.002;
      }
      else if(pos.y >= global.size.height - 200) {
        return -0.002;
      }
      else {
        return Math.random() * (this.randomAngle.min - (this.randomAngle.max)) + this.randomAngle.max;
      }
    }

    return 0;
  }

  CalculRandomPosition(randomSideKey: string): any {
    let randomSide: any = {
      "top": {
        "min": {
          "x": 200,
          "y": 0
        },
        "max": {
          "x": global.size.width - 200,
          "y": 0
        }
      },
      "bottom": {
        "min": {
          "x": 200,
          "y": global.size.height
        },
        "max": {
          "x": global.size.width - 200,
          "y": global.size.height
        }
      },
      "left": {
        "min": {
          "x": 0,
          "y": 200
        },
        "max": {
          "x": 0,
          "y": global.size.height - 200
        }
      },
      "right": {
        "min": {
          "x": global.size.width,
          "y": 200
        },
        "max": {
          "x": global.size.width,
          "y": global.size.height - 200
        }
      }
    };

    return randomSide[randomSideKey];
  }

  Clear():void {

  }
}
