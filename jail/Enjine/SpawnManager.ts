/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpawnManager {
  spriteGenerator: SpriteGenerator = new SpriteGenerator();

  constructor(public spriteManager: SpriteManager, public time: number) {
    setInterval( () => { this.Exec() }, time );
    setInterval( () => { this.ExecBody() }, time * 3 );
  }

  Exec():void {
    let tmpSprite: Sprite = this.spriteGenerator.Exec(undefined);
    this.spriteManager.Add(tmpSprite);
  }

	ExecBody():void {
		let tmpSprite: Sprite = this.spriteGenerator.Exec(Data.Ressources.RandomBody());
		this.spriteManager.Add(tmpSprite);
	}
}
