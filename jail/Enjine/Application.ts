/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

let global:any = {};
global.size = {width: 0, height: 0};
global.lastSize = {width: 0, height: 0};

class Application {
  private canvas: any;
  private context: any;

  private framesPerSecond: number = 1000 / 30;
  private lastTime: number = 0;

  private loader: Loader = undefined;
  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor() {
    this.LoadCanvas();
    this.StartTimer();
    this.StartLoadData();
  }

  /**
  * Initialise le canvas avec la taille du navigateur de l'utilisateur
  */
  LoadCanvas():void {
    this.canvas = document.getElementById("canvas");
		this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight
    global.canvas = this.canvas;

    this.context = this.canvas.getContext('2d');
		global.size.width = this.canvas.width;
		global.size.height = this.canvas.height;
		global.lastSize.width = this.canvas.width;
		global.lastSize.height = this.canvas.height;

    window.addEventListener('resize', this.ResizeCanvas, false);

    // Initialise les évènements: souris, clavier
    EventMouse.Mouse.Event(this.canvas);
    EventKeyboard.Input.Event(this.canvas);
  }

  /**
  * Démarres la boucle infini du jeu, cette méthode appelle Update toutes les X secondes.
  */
  StartTimer():void {
    this.lastTime = new Date().getTime();
    setInterval( () => { this.Update(); }, this.framesPerSecond);
  }

  /**
  * Démarres le chargement des données du jeu (image, son, ..)
  */
  StartLoadData():void {
    this.loader = new Loader();
  }

  /**
  * Remplis le canvas d'une couleur uni et appelle la méthode Update et Draw de la scène actuelle.
  */
  Update():void {
    let newTime: number = new Date().getTime();
    let delta: number = (newTime - this.lastTime) / 1000;
    this.lastTime = newTime;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (SceneManager.Manager.currentScene && Data.Ressources.isLoaded) {
      if (SceneManager.Manager.currentScene.started) {
        SceneManager.Manager.currentScene.Update(delta);
        SceneManager.Manager.currentScene.Draw(this.context);
      }
      else {
        SceneManager.Manager.currentScene.UpdateNoStarted(delta);
        SceneManager.Manager.currentScene.DrawNoStarted(this.context);
      }

    }
  }

  ResizeCanvas():void {
    this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

    global.size.width = this.canvas.width;
		global.size.height = this.canvas.height;

    SceneManager.Manager.currentScene.Resize();
  }
}
