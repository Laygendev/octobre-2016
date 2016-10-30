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
    static numberBodies: number = 0;
		static humanPart: Array<any>;
    static numberHumanPart: number = 0;
    static staticImage: Array<any> = [];
    static bodySpawn: any;
    static orderSpawn: any;

    static Load(callback: () => void):void {
			this.buttons['restart'] = new Image();
			this.buttons['restart'].src = 'jail/images/buttonRestart.png';

			this.staticImage['leave'] = new Image();
			this.staticImage['leave'].src = 'jail/images/buttonLeave.png';
      
      this.staticImage['mouse'] = new Image();
      this.staticImage['mouse'].src = 'jail/images/mouse.png';

      this.staticImage['terre'] = new Image();
      this.staticImage['terre'].src = 'jail/images/terre.png';

      this.staticImage['map'] = new Image();
      this.staticImage['map'].src = 'jail/images/map.png';

      this.staticImage['trash'] = new Image();
      this.staticImage['trash'].src = 'jail/images/trash.png';

      this.staticImage['helpCorpsEtCommande'] = new Image();
      this.staticImage['helpCorpsEtCommande'].src = 'jail/images/helpCorpsEtCommande.png';

      this.staticImage['helpPoubelle'] = new Image();
      this.staticImage['helpPoubelle'].src = 'jail/images/helpPoubelle.png';

      this.staticImage['mapFrance'] = new Image();
      this.staticImage['mapFrance'].src = 'jail/images/mapFrance.png';

      this.LoadSpriteSheet( (spriteSheet: HTMLImageElement) => {
        this.spriteSheet = spriteSheet;

        Data.JSONLoader.Exec('jail/json/bodySpawn.json', (data: Array<any>) => {
          this.bodySpawn = data;

          Data.JSONLoader.Exec('jail/json/orderSpawn.json', (data: Array<any>) => {
            this.orderSpawn = data;

            Data.JSONLoader.Exec('jail/json/loadBodies.json', (data: Array<any>) => {
              this.bodies = data;
    					for (var key in this.bodies ) {
    						this.numberBodies++;
    					}

              Data.JSONLoader.Exec('jail/json/loadElements.json', (data: Array<any>) => {
                this.humanPart = data;
                for (var key in this.humanPart) {
                    this.numberHumanPart++;
                }
                this.isLoaded = true;
                callback();
              });
            });
          });
        });
      });
    }

    static LoadSpriteSheet(callback: (image: HTMLImageElement) => any):void {
      var spriteSheet: HTMLImageElement = new Image();
      spriteSheet.src = 'jail/images/spritesheet.png';
      callback(spriteSheet);
    }

		static RandomHumanPart():string {
      var randomNumber: number = Math.floor(Math.random() * (0 - (this.numberHumanPart))) + this.numberHumanPart;
      var i = 0;
      for (var key in this.humanPart) {
        if (i == randomNumber) {
          return key;
        }
        i++;
      }

			return undefined;
		}

		static RandomBody():string {
      var randomNumber: number = Math.floor(Math.random() * (0 - (this.numberBodies))) + this.numberBodies;
      var i = 0;
      for (var key in this.bodies) {
        if (i == randomNumber) {
          return key;
        }
        i++;
      }

			return undefined;
		}

		static RandomPosBody():any {
      var randomNumber: number = Math.floor(Math.random() * (0 - (this.bodySpawn.length))) + this.bodySpawn.length;
      let tmp = this.bodySpawn[randomNumber];
      this.bodySpawn.splice(randomNumber, 1);

      return tmp;
		}

		static RandomPosOrder():any {
      var randomNumber: number = Math.floor(Math.random() * (0 - (this.orderSpawn.length))) + this.orderSpawn.length;
      let tmp = this.orderSpawn[randomNumber];
      this.orderSpawn.splice(randomNumber, 1);
      return tmp;
		}
  }
}
