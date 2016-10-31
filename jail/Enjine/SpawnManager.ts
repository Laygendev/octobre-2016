/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpawnManager {
  private spriteToAdd: any = [];
  private spriteGenerator: SpriteGenerator = new SpriteGenerator();
  constructor() {}

  Exec(currentTime: number): void {
    if (this.spriteToAdd[currentTime]) {
      for (var key in this.spriteToAdd[currentTime]) {
        let name = this.spriteToAdd[currentTime][key];
        let sprite: Sprite;

        if (name.substr(0, 4) === "body") {
          let posBody: any = Helper.Body.RandomPosBody();
          let zone: any = Data.Object.bodies[this.spriteToAdd[currentTime][key]];
          sprite = new Sprite(
            Data.Images.spriteSheet,
            this.spriteToAdd[currentTime][key],
            'body',
            {x: posBody.x, y: posBody.y});

          sprite.SetPos({x: global.hWidth + posBody.x, y: global.height - 180 + posBody.y});
          sprite.angle = posBody.angle;
          sprite.SetZone(zone);
          sprite.SetClickable({w: zone.width, h: zone.height},{x: zone.width / 2, y: zone.height / 2}, Helper.Body.Exec);
          SceneManager.Manager.currentScene.bodyManager.Add(sprite);
        }
        else {
          sprite = this.spriteGenerator.Exec(this.spriteToAdd[currentTime][key]);
          sprite.SetCollider();
          SceneManager.Manager.currentScene.spriteManager.Add(sprite);
        }
      }
    }
  }

  Clear():void {

  }

  Add(listName: Array<string>):void {
    for(var key in listName) {
      let infos: any = listName[key].split('_');
      let number: number = parseInt(infos[0]) + 10;
      let doublonInfos: any = [number, infos[1]];

      if (!this.spriteToAdd[infos[0]]) {
        this.spriteToAdd[infos[0]] = [];
      }

      if (!this.spriteToAdd[doublonInfos[0]]) {
        this.spriteToAdd[doublonInfos[0]] = [];
      }

      this.spriteToAdd[infos[0]].push(infos[1]);
      this.spriteToAdd[doublonInfos[0]].push(doublonInfos[1]);
    }
  }
}
