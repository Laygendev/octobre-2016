/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class MainScene extends Scene {
  private spawnManager: SpawnManager =  undefined;
  protected character: Character = undefined;

  private spriteClickableTerre: SpriteClickable = new SpriteClickable(
    Data.Images.buttons['terre'],
    'terre',
    'buttons',
    {x : global.hWidth - (872 / 2), y: global.height - 176},
    {width: 873 , height: 176}
  );

  private spriteClickableTrash: SpriteClickable = new SpriteClickable(
    Data.Images.buttons['trash'],
    'trash',
    'buttons',
    {x : 0, y: global.height - 119},
    {width: 111 , height: 119}
  );

  protected countdown: Countdown = undefined;
  // protected point: Score = new Score();

  public orderManager: OrderManager = new OrderManager();
  protected spawnOrderManager: SpawnOrderManager = undefined;

  constructor() {
    super();

    this.spriteManager.Add(this.spriteClickableTerre);
    this.spriteManager.Add(this.spriteClickableTrash);
  }

  public Start():void {
    super.Start();
    // this.spawnManager = new SpawnManager(this.spriteManager, 2500);
  }

  public Update(deltaTime: number):void {
    super.Update(deltaTime);

    if (this.countdown) {
      this.countdown.Update();
    }

		if (this.character) {
	    this.character.Update();
    }

		// let spriteKey = this.spriteManager.Update(deltaTime);
    //
		// if (spriteKey && !this.character) {
    //   // this.canSend = false;
    //   // setTimeout( () => { this.canSend = true; }, 50);
		// 	this.InitCharacter(spriteKey);
		// }


    // if (this.spriteClickableTerre.ClickIn() && this.character && this.canSend) {
    //   let order = this.character.CheckElement(this.orderManager);
    //    if (order) {
    //      Data.Sound.PlaySound('send', false);
    //      order.SetCharacter(this.character);
    //      this.character.Clear();
    //      this.point.Add(20);
    //
    //      delete this.character;
    //    }
    //    else {
    //       Data.Sound.PlaySound('wrong', false);
    //    }
    // }

    // if (this.spriteClickableTrash.ClickIn() && this.character) {
    //   this.character.Clear();
    //   delete this.character;
    //   Data.Sounds.PlaySound('poubelle', false);
    // }
  }

  public Draw(context: any):void {
    super.Draw(context);

    if (this.countdown) {
      this.countdown.Update();
    }

    if (this.orderManager) {
      this.orderManager.Draw(context);
    }

    if (this.character) {
      this.character.Draw(context);
    }
  }

	public Clear():void {
    super.Clear();
	}
}
