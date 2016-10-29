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

    static Pause():void {
      this.currentScene.started = false;
    }

    static Resume():void {
      this.currentScene.started = true;
    }

    static Update(delta: number):void {
      this.currentScene.Update(delta);
    }

    static Draw(context: any):void {
      this.currentScene.Draw(context);
    }
  }
}
