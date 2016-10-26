/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Character extends Sprite {
  private childs: any = {'head': [], 'body': [], 'arm': [], 'leg': []};
  public colliders: Array<CharacterCollider> = [];
  public angle: number = 0;
  public speedAngle: number = 0.05;
  constructor(public mainScene: MainScene, public x: number, public y:number, public zone: Array<any>) {
    super(x, y, zone, 'body');
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
    this.childs[child["type"]].push(child);
  }

  public Update():void {
    this.x = EventMouse.Mouse.move.x;
    this.y = EventMouse.Mouse.move.y;

    if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left)) {
      this.angle -= this.speedAngle;
    }

    if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right)) {
      this.angle += this.speedAngle;
    }

    for (var key in this.colliders) {
      this.colliders[key].Update(this.x, this.y, this.angle);
    }
  }

  public UpdateCollider(spriteManager: SpriteManager, listSprite: Array<Sprite>):void {
    for (var key in this.colliders) {
      var contactInfo: any = this.colliders[key].CheckCollider(this, listSprite, key);

      if (contactInfo && contactInfo.sprite) {
        if (contactInfo.valide) {
          spriteManager.Remove(contactInfo.sprite);
          contactInfo.sprite.SetPos(0, 0);

          let offsetPos = {
            x: contactInfo.sprite.zone.collider[contactInfo.zoneElement].x,
            y: contactInfo.sprite.zone.collider[contactInfo.zoneElement].y
          };

          switch (contactInfo.zoneCharacter) {
            case "top":
            offsetPos.y += this.childs['body'][0].zone.height / 2;
            break;
            case "bottom":
            offsetPos.y -= this.childs['body'][0].zone.height / 2;
            break;
            case "left":
            offsetPos.x -= this.childs['body'][0].zone.width / 2;
            break;
            case "right":
            offsetPos.x += this.childs['body'][0].zone.width / 2;
            break;
            default:
            break;
          }

          offsetPos.x *= -1;
          offsetPos.y *= - 1;

          contactInfo.sprite.SetOffset(offsetPos);
          this.AddChild(contactInfo.sprite);
          contactInfo.sprite.angle = 0;

          this.RemoveCollider(contactInfo.zoneCharacter);
        }
        else {
          this.mainScene.ChangeScene(true);
        }
        break;
      }
    }
  }

  public Draw(context: any):void {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);

    for (var type in this.childs) {
      for (var key in this.childs[type]) {
        this.childs[type][key].Draw(context);
      }
    }

    context.restore();

    // for (var key in this.colliders) {
    //   this.colliders[key].Draw(context);
    // }
  }

  public RemoveCollider(zoneName: string):void {
    delete this.colliders[zoneName];
  }

  public CheckElement():boolean {
    if (this.childs['head'].length > 0 && this.childs['body'].length > 0 && this.childs['arm'].length > 1 && this.childs['leg'].length > 0) {
      return true;
    }
    // Fast test
    // if ( this.childs['body'].length > 0 && this.childs['head'].length > 0) {
    // 	return true;
    // }

    return false;
  }
}
