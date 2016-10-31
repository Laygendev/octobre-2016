/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
Le fichier boot du jeu: charge le canvas, et initialise l'objet "Loader" et "Timer"
Gère la boucle principale du jeu
*/

/**
 * Permet d'accéder à la taille du canvas dans tous les fichiers
 * @type {any}
 */
let global: any = {
  application: undefined,
  canvas: undefined,
  width: 0,
  height: 0 };

/**
 * Charges le canvas
 */
class Application {
  /**
   * La fenêtre ou le jeu est dessiné
   * @type {any}
   */
  private canvas: any = undefined;

  /**
   * Le contexte de dessin
   * @type {CanvasRenderingContext2D}
   */
  private context: CanvasRenderingContext2D = undefined;

  /**
   * L'objet qui vas gérer la boucle principale du jeu (Également le deltaTime)
   * @type {Timer}
   */
  private timer: Timer = undefined;

  /**
   * Charges toutes les ressources (images, musiques, bruitages)
   * @type {Loader}
   */
  private loader: Loader = new Loader();

  /**
   * Le constructeur déclenche la fonction pour charger le canvas,
   * ainsi que la fonction pour charger les ressources.
   * Lances le timer (L'objet qui permet de gérer la boucle principale du jeu)
   * @return {void}
   */
  constructor() {
    global["application"] = this;

    this.LoadCanvas();
    this.StartLoadData( () => {
      SceneManager.Manager.SetScene(new SceneDidacticiel());
      this.timer = new Timer(this);
    } );
  }

  /**
   * Charges le canvas et le contexte 2D.
   * Définis la taille du canvas à la taille du navigateur, et met ses valeurs dans l'Objet global.
   * Initialises également les évènements du jeu: Souris, clavier.
   * @return {void}
   */
  LoadCanvas():void {
    this.canvas = document.getElementById("canvas");
    global["canvas"] = this.canvas;

		this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    global["width"] = this.canvas.width;
    global["height"] = this.canvas.height;
    // h for half
    global["hWidth"] = this.canvas.width / 2;
    global["hHeight"] = this.canvas.height / 2;

    this.context = this.canvas.getContext('2d');

    // Initialise les évènements: souris, clavier
    EventMouse.Mouse.Event(this.canvas);
    EventKeyboard.Input.Event(this.canvas);
  }

  /**
   * Appelle la méthode Exec de l'Objet loader pour charger toutes les
   * ressources du jeu.
   * @param  {cb}      La fonction de callback
   * @return {void}
   */
  StartLoadData(cb: () => void):void {
    this.loader.Exec(() => {
        cb();
    });
  }

  /**
   * La boucle principale du jeu. Elle est appelée toutes les 1000 / 30 secondes.
   * Elle nettoie l'affichage de l'écran à chaque tour.
   * Si l'Objet currentScene de SceneManager.Manager existe, cette méthode
   * appelle les méthodes Update et Draw de celui-ci.
   * @param {number} deltaTime
   */
  Update(deltaTime: number):void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (SceneManager.Manager.currentScene) {
      SceneManager.Manager.currentScene.Update(deltaTime);
      SceneManager.Manager.currentScene.Draw(this.context);
    }
  }

  Exit():void {
    window.open('', '_self', ''); window.close();
  }
}
