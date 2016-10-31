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
   * La position du personnage
   * @type {any}
   */
  public pos: any = {
    x: 0,
    y: 0
  }

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
    let type: string = child["type"];
    Data.Sounds.PlaySound('joinOk', false);
    this.childs[type] = child;
  }

  /**
   * Met à jour la position du personnage selon la souris.
   * Si on presse le clavier ou les cliques de la souris, fait une rotation
   * au personnage.
   * Met à jour les collisions du personnage.
   */
  public Update():void {
    this.pos.x = EventMouse.Mouse.move.x;
    this.pos.y = EventMouse.Mouse.move.y;

    if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
      this.angle -= this.speedAngle;
    }
    else if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
      this.angle += this.speedAngle;
    }

    for (var key in this.characterColliders) {
      this.characterColliders[key].Update(this.pos, this.angle);
    }
  }

  /**
   * Déplaces le canvas pour le centrer sur le personnage.
   * Fait une rotation selon son angle.
   * Appelle la méthode Draw de tous ses enfants.
   * @param {any} context [description]
   */
  public Draw(context: any):void {
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.rotate(this.angle);

    for (var key in this.childs) {
      if (this.childs[key]) {
        this.childs[key].Draw(context);
      }
    }

    context.restore();
  }

  /**
   * Permet de supprimer une collision du personnage
   * @param {string} zoneName La clé de la collision "top", "bottom", "left" ou
   * "right".
   */
  public RemoveCollider(zoneName: string):void {
    delete this.characterColliders[zoneName];
  }

  /**
   * Nettoies toutes les variables
   */
  public Clear():void {
    delete this.characterColliders;

    this.angle = 0;

    this.speedAngle = 0;

    this.pos.x = 0;
    this.pos.y = 0;
    delete this.pos;

    delete this.childs;
  }
}
