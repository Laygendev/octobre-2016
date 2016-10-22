/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpawnManager {
  spriteGenerator: SpriteGenerator = new SpriteGenerator();

  constructor(public spriteManager: SpriteManager, public time: number) {
    setInterval( () => { this.Exec() }, time );
  }

  Exec(): void {
    let tmpSprite: Sprite = this.spriteGenerator.Exec();
    this.spriteManager.Add(tmpSprite);
  }
}
