/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Character extends Sprite {
  private childs: any = {'head': undefined, 'body': undefined, 'arml': undefined, 'armr': undefined, 'leg': undefined};
  public colliders: Array<CharacterCollider> = [];
  public angle: number = 0;
  public speedAngle: number = 0.1;
  public secondTime: number = 0;
  public timeForDelivery: number = 2;
  public interval: any = undefined;
  public currentAction: string = "";
  public can:any = {
    delivery: false,
    delete: false
  }
  constructor(public mainScene: MainScene, public x: number, public y:number, public zone: Array<any>, public name: string) {
    super(x, y, zone, 'body', 'character');
  }

  protected Init():void {
    Data.JSONLoader.Exec('jail/json/characterCollider.json', (data) => {
      this.colliders["top"] = new CharacterCollider(data['top']);
      this.colliders["bottom"] = new CharacterCollider(data['bottom']);
      this.colliders["left"] = new CharacterCollider(data['left']);
      this.colliders["right"] = new CharacterCollider(data['right']);
    });
  }

  public AddChild(child: Sprite):void {
    this.childs[child["type"]] = child;
  }

  public Update():void {
    this.x = EventMouse.Mouse.move.x;
    this.y = EventMouse.Mouse.move.y;

    if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
      this.angle -= this.speedAngle;
      this.currentAction = "left";
    }
    else if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
      this.angle += this.speedAngle;
      this.currentAction = "right"
    }
    else {
      this.currentAction = "";
    }

    if (this.currentAction != "") {
      if (!this.interval) {
        this.interval = setInterval(() => { this.WaitForDelivery(this.currentAction) }, 1000);
      }
    }
    else {
      clearInterval(this.interval);
      this.interval = undefined;
      this.secondTime = 0;
      this.can.delivery = false;
      this.can.delete = false;
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
            offsetPos.y += this.childs['body'].zone.height / 2;
            break;
            case "bottom":
            offsetPos.y -= this.childs['body'].zone.height / 2;
            break;
            case "left":
            offsetPos.x -= this.childs['body'].zone.width / 2;
            break;
            case "right":
            offsetPos.x += this.childs['body'].zone.width / 2;
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
					// Perte de tous ses membres
          // this.mainScene.ChangeScene(true);
        }
        break;
      }
    }
  }

  public Draw(context: any):void {
    context.font = "30px Source Sans Pro Bold";
    context.fillText("Actions dans: " + (this.secondTime), (global.size.width - 300), 50);

    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);

    for (var key in this.childs) {
      if (this.childs[key]) {
        this.childs[key].Draw(context);
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

  public CheckElement(orderManager: OrderManager):any {
    let found: any = true;
		let foundI: number = 0;

    for (var i in orderManager.listOrder) {
      found = orderManager.listOrder[i];
      for (var key in this.childs) {
        if (this.childs[key]) {
          if (orderManager.listOrder[i].listSprite.indexOf(this.childs[key].name) == -1) {
            found = false;
          }
        }
        else {
          found = false;
        }
      }

	    if (found) {
				let iNumber: any = i;
				orderManager.listOrder.splice(iNumber, 1);
	      orderManager.Remove(found);
	      return found;
	    }
		}

    return false;
  }

  public WaitForDelivery(direction: string):void {
    this.secondTime += 1;

    if (this.secondTime >= this.timeForDelivery) {
      if (direction == "left") {
        this.can.delivery = true;
      }
      else {
        this.can.delete = true;
      }
    }
  }

  public Clear():void {
    delete this.childs.head;
    delete this.childs.body;
    delete this.childs.arm;
    delete this.childs.leg;
    delete this.colliders;
    this.angle = 0;
    this.speedAngle = 0;
    this.secondTime = 0;
    this.timeForDelivery = 5;
    if (this.interval) {
      clearInterval(this.interval);
    }
    delete this.interval;
    delete this.can.delivery;
    delete this.can.delete;
  }
}
