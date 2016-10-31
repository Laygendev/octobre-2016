module Helper {
  export class Body {
    static RandomPosBody():void {
      var randomNumber: number = Math.floor(Math.random() * (0 - (Data.Object.bodiesSpawn.length))) + Data.Object.bodiesSpawn.length;
      let tmp = Data.Object.bodiesSpawn[randomNumber];
      Data.Object.bodiesSpawn.splice(randomNumber, 1);

      return tmp;
    }

    static Exec(triggerElement: any):void {
      SceneManager.Manager.currentScene.InitCharacter(triggerElement);
      Data.Sounds.PlaySound("takeBody", false);
    }
  }
}
