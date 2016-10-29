/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpawnManager {
  spriteGenerator: SpriteGenerator = new SpriteGenerator();
  intervalExec: any = undefined;
  intervalBody: any = undefined;

  constructor(public spriteManager: SpriteManager, public time: number) {
    this.intervalExec = setInterval( () => { this.Exec() }, time );
    this.intervalBody = setInterval( () => { this.ExecBody() }, time * 3 );
  }

  Exec():void {
    let tmpSprite: Sprite = this.spriteGenerator.Exec(undefined);
    tmpSprite.SetSpriteManager(this.spriteManager);
    this.spriteManager.Add(tmpSprite);
  }

	ExecBody():void {
		let tmpSprite: Sprite = this.spriteGenerator.Exec(Data.Ressources.RandomBody());
		this.spriteManager.Add(tmpSprite);
	}

  Clear():void {
    
  }
}
