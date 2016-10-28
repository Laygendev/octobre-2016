/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Loader {
  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor() {
    this.StartLoad();
  }

  StartLoad():void {
    Data.Ressources.Load( () => {
      Data.Sound.Load();
    });
  }
}
