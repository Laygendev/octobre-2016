/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Character extends Sprite {
  private childs: Array<Sprite> = [];
  public colliders: Array<CharacterCollider> = [];
  constructor(public x: number, public y:number, public zone: Array<any>) {
    super(x, y, zone);
  }

  protected Init():void {
    Data.JSONLoader.Exec('jail/json/characterCollider', (data) => {
      this.colliders[0] = new CharacterCollider(data['top']);
    });
  }

  public AddChild(child: Sprite):void {
    this.childs.push(child);
  }

  public Update():void {
    this.x = EventMouse.Mouse.move.x;
    this.y = EventMouse.Mouse.move.y;

    for (var key in this.colliders) {
      this.colliders[key].Update(this.x, this.y);
    }
  }

  public UpdateCollider(spriteManager: SpriteManager, listSprite: Array<Sprite>):void {
    for (var key in this.colliders) {
      var spriteContact = this.colliders[key].CheckCollider(this, listSprite);

      if (spriteContact) {
        spriteManager.Remove(spriteContact);
        this.AddChild(spriteContact);
        break;
      }
    }
  }

  public Draw(context: any):void {
    context.save();
    context.translate(this.x, this.y);

    for (var key in this.childs) {
      this.childs[key].Draw(context);
    }

    context.restore();

    for (var key in this.colliders) {
      this.colliders[key].Draw(context);
    }
  }
}
