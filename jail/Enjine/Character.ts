/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
Gères le personnage du jeu:
-Gères les différentes parties d'un personnage: Corps, Tête, Bras, Jambe.
-Gères la collision du corps vers les autres parties humaines.
-Gères le déplacement par rapport au curseur de la souris.
-Gères la rotation par rapport au clique de la souris, ou au clavier.
*/

class Character {
  /**
   * Cette objet contient plusieurs clés pour respecter l'ordre lors de l'affichage.
   * @type {any}
   */
  private childs: any = {'head': undefined, 'body': undefined, 'arml': undefined, 'armr': undefined, 'leg': undefined};

  /**
   * Le tableau qui contient les objets CharacterCollider
   * @type {Array<CharacterCollider>}
   */
  public characterColliders: any = {
    "top": undefined,
    "bottom": undefined,
    "left": undefined,
    "right": undefined
  };

  /**
   * L'angle du personnage
   * @type {number}
   */
  public angle: number = 0;

  /**
   * La vitesse de la rotation
   * @type {number}
   */
  public speedAngle: number = 0.1;

  /**
   * Le constructeur initialise les collisions du personnage
   * @return {void}
   */
  constructor() {
    Data.JSONLoader.Exec('jail/json/characterCollider.json', (data) => {
      for (var key in data) {
        this.characterColliders[key] = new CharacterCollider(data[key]);
      }
    });
  }

  /**
   * Ajoutes une partie humaine au personnage.
   * @param {Sprite} child [description]
   * @return {void}
   */
  public AddChild(child: Sprite):void {
    Data.Sounds.PlaySound('joinOk', false);
    this.childs[child["type"]] = child;
  }

  public Update():void {
    this.x = EventMouse.Mouse.move.x;
    this.y = EventMouse.Mouse.move.y;

    if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
      this.angle -= this.speedAngle;
    }
    else if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
      this.angle += this.speedAngle;
    }

    for (var key in this.colliders) {
      this.colliders[key].Update(this.x, this.y, this.angle);
    }
  }

  public Draw(context: any):void {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);

    for (var key in this.childs) {
      if (this.childs[key]) {
        this.childs[key].Draw(context);
      }
    }

    context.restore();
  }

  public RemoveCollider(zoneName: string):void {
    delete this.colliders[zoneName];
  }

  public Clear():void {
    delete this.colliders;
    this.angle = 0;
    this.speedAngle = 0;
    this.secondTime = 0;
  }
}
