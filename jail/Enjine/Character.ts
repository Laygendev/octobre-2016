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
      this.colliders["top"] = new CharacterCollider(data['top']);
      this.colliders["bottom"] = new CharacterCollider(data['bottom']);
      this.colliders["left"] = new CharacterCollider(data['left']);
      this.colliders["right"] = new CharacterCollider(data['right']);
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
      var contactInfo: any = this.colliders[key].CheckCollider(this, listSprite, key);

      if (contactInfo && contactInfo.sprite) {
        console.log(contactInfo);
        spriteManager.Remove(contactInfo.sprite);
        contactInfo.sprite.SetPos(0, 0);

        let offsetPos = {
            x: contactInfo.sprite.zone.collider[contactInfo.zone].x,
            y: contactInfo.sprite.zone.collider[contactInfo.zone].y
        };

        switch (contactInfo.zone) {
          case "top":
            offsetPos.y += this.childs[0].zone.height / 2;
            break;
          case "bottom":
            offsetPos.y -= this.childs[0].zone.height / 2;
            break;
          case "left":
            offsetPos.x -= this.childs[0].zone.width / 2;
            break;
          case "right":
            offsetPos.x += this.childs[0].zone.width / 2;
            break;
          default:
            break;
        }

        offsetPos.x *= -1;
        offsetPos.y *= - 1;

        contactInfo.sprite.SetOffset(offsetPos);
        this.AddChild(contactInfo.sprite);

        this.RemoveCollider(contactInfo.zone);
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

    // for (var key in this.colliders) {
    //   this.colliders[key].Draw(context);
    // }
  }

  public RemoveCollider(zoneName: string):void {
    delete this.colliders[zoneName];
  }
}
