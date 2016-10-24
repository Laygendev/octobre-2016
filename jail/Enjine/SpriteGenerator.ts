/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteGenerator {
  constructor() {}

  Exec(): Sprite {
    let pos = this.RandomPosition();
    return new Sprite(pos.x, pos.y, Data.Ressources.RandomHumanPart());
  }

  RandomPosition(): any {
    return {
      x: 0,
      y: 0
    };
  }
}
