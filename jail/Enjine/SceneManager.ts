/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module SceneManager {
  export class Manager {
    static currentScene: Scene;

    static SetScene(levelScene: Scene):void {
      this.currentScene = levelScene;
    }

    static Update(delta: number):void {
      this.currentScene.Update(delta);
    }

    static Draw(context: any):void {
      this.currentScene.Draw(context);
    }
  }
}
