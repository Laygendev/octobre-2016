/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module Utils {
  export class Animate {
    static Scale(scale:any): any {
      if (scale.x < 1.5 && scale.x >= 1.0) {
        scale.x += 0.01;
        scale.y += 0.01;
      }
      else {
        scale.x -= 0.01;
        scale.y -= 0.01;
      }


      return scale;
    }
  }
}
