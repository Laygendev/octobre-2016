/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module Data {
  export class Images {
    static spriteSheet: HTMLImageElement = new Image();
    static buttons: any = [];
    static backgrounds: any = [];
    static staticImages: any = [];

    static Load(cb: () => void):void {
      this.LoadSpriteSheet(() => {
        Data.Images.LoadButton(() => {
          Data.Images.LoadBackground(() => {
            Data.Images.LoadStaticElement(() => {
              cb();
            });
          });
        });
      });
    }

    static LoadSpriteSheet(cb: () => void):void {
      Data.Images.spriteSheet.src = 'jail/images/spritesheet.png';
      cb();
    }

    static LoadButton(cb: () => void):void {
      Data.Images.buttons['ok'] = new Image();
      Data.Images.buttons['ok'].src = 'jail/images/button/ok.png';

      Data.Images.buttons['exit'] = new Image();
      Data.Images.buttons['exit'].src = 'jail/images/button/exit.png';

      Data.Images.buttons['trash'] = new Image();
      Data.Images.buttons['trash'].src = 'jail/images/button/trash.png';

      Data.Images.buttons['terre'] = new Image();
      Data.Images.buttons['terre'].src = 'jail/images/button/terre.png';

      Data.Images.buttons['levelFrance'] = new Image();
      Data.Images.buttons['levelFrance'].src = 'jail/images/button/france.png';

      cb();
    }

    static LoadBackground(cb: () => void):void {
      Data.Images.backgrounds['europe'] = new Image();
      Data.Images.backgrounds['europe'].src = 'jail/images/background/map.png';

      cb();
    }

    static LoadStaticElement(cb: () => void):void {
      Data.Images.staticImages['helpPoubelle'] = new Image();
      Data.Images.staticImages['helpPoubelle'].src = 'jail/images/didacticiel/helpPoubelle.png';

      Data.Images.staticImages['helpCorpsEtCommande'] = new Image();
      Data.Images.staticImages['helpCorpsEtCommande'].src = 'jail/images/didacticiel/helpCorpsEtCommande.png';

      Data.Images.staticImages['mouse'] = new Image();
      Data.Images.staticImages['mouse'].src = 'jail/images/mouse.png';

      cb();
    }
  }
}
