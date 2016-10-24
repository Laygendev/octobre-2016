/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module Data {
  export class Ressources {
    static isLoaded: boolean = false;
    static spriteSheet: HTMLImageElement;
    static buttons: Array<HTMLImageElement> = [];
    static bodies: Array<any>;
    static humanPart: Array<any>;

    static Load():void {
			this.buttons['restart'] = new Image();
			this.buttons['restart'].src = 'jail/images/buttonRestart.png';

      this.LoadSpriteSheet( (spriteSheet: HTMLImageElement) => {
        this.spriteSheet = spriteSheet;

        Data.JSONLoader.Exec('jail/json/loadBodies.json', (data: Array<any>) => {
          this.bodies = data;

          Data.JSONLoader.Exec('jail/json/loadElements.json', (data: Array<any>) => {
            this.humanPart = data;
            this.isLoaded = true;
            SceneManager.Manager.SetScene(new MainScene());
          });
        });
      });
    }

    static LoadSpriteSheet(callback: (image: HTMLImageElement) => any):void {
      var spriteSheet: HTMLImageElement = new Image();
      spriteSheet.src = 'jail/images/elements.png';
      callback(spriteSheet);
    }

		static RandomHumanPart():string {
			let partName = "head0";
			return partName;
		}
  }
}
