/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
Appelle les méthodes Load des Objets global Ressources.Images et Ressources.Sounds
*/

class Loader {
  /**
   * Le constructeur ne... Fait rien.
   * @return {void}
   */
  constructor() {}

  /**
   * Appelle la méthode Load des Objets global Ressources.Images et Ressources.Sounds
   * @param  {cb}       La fonction de callback
   * @return {void}
   */
  Exec(cb: () => void): void {
    Data.Images.Load(() => {
      Data.Sounds.Load(() => {
        cb();
      });
    });
  }
}
