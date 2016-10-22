/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module SceneManager {
  export class Manager {
    static currentScene: Scene;
    static SetScene(levelScene: Scene):void {
      this.currentScene = levelScene;
      levelScene.Init();
    }

    static Update():void {
      this.currentScene.Update();
    }

    static Draw(context: any):void {
      this.currentScene.Draw(context);
    }
  }
}
