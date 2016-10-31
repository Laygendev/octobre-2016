/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
Gères la listes des dialogues, permet de sauter un dialogue au clic de la souris
Ou bien de passer à un dialogue suivant si le dialogue actuel est finit.
*/

class DialogManager {
  /**
   * Le clé du dialogue actuel
   * @type {number}
   */
  private currentKeyDialog: number = 0;

  /**
   * La liste des dialogues
   * @type {Array<Dialog>}
   */
  private dialogs: Array<Dialog>= [];

  /**
   * Le sprite indiquant qui faut "cliquer" pour effectuer une action.
   * Soit sauter un dialogues, soit passer au dialogue suivant.
   * @type {SpriteClickable}
   */
  private mouseSprite: SpriteClickable = undefined;

  /**
   * Initialise le clique de la souris
   * @return {void} nothing
   */
  constructor() {}

  /**
   * Quand on clique, soit on passe au dialoguqe suivant.
   * Soit on le complète.
   * @param {Event} event L'évènement de la souris
   */
  MouseDown(event: Event):void {
    if (this.dialogs) {
      if (this.dialogs[this.currentKeyDialog].done) {
        this.NextDialog();
      }
      else {
        if (this.dialogs[this.currentKeyDialog].currentChar > 4) {
          this.dialogs[this.currentKeyDialog].CompleteDialog();
        }
      }
    }
  }

  /**
   * Charges les dialogues selon un fichier JSON
   * @param {string} pathJson [description]
   */
  public Load(pathJson: string):void {
    Data.JSONLoader.Exec(pathJson, (data: any) => {
      for (var i = 0; i < data.dialog.length; i++) {
        this.AddDialog(new Dialog(data.dialog[i], 50));
      }
    });
  }

  /**
   * Ajoutes un dialogues dans le tableau dialogs
   * @param  {Dialog} dialog Le dialogue a ajouter
   * @return {void}          nothing
   */
  public AddDialog(dialog: Dialog) {
    this.dialogs.push(dialog);
  }

  /**
   * Dessines les dialogues enfants
   * @param {any} context [description]
   */
  public Draw(context: any):void {
    if (this.dialogs) {
      context.save();
      context.fillStyle = "white";

      if (this.dialogs[this.currentKeyDialog]) {
        this.dialogs[this.currentKeyDialog].Draw(this.mouseSprite, context);
      }

      context.restore();
    }
  }

  /**
   * Passes au dialogue suivant.
   * Si c'était le dernier, clear cette objet, et remet en route la scène
   * actuelle.
   */
  public NextDialog():void {
    this.currentKeyDialog++;

    if (this.currentKeyDialog >= this.dialogs.length) {
      this.Clear();
      delete SceneManager.Manager.currentScene.dialogManager;
      delete SceneManager.Manager.currentScene.Start();
    }
    else {
      this.dialogs[this.currentKeyDialog].currentChar = 0;
      this.dialogs[this.currentKeyDialog].currentText = "";
      this.dialogs[this.currentKeyDialog].done = false;
    }
  }

  /**
   * Nettois toutes les variables
   */
  public Clear():void {
    delete this.currentKeyDialog;
    for (var key in this.dialogs) {
      this.dialogs[key].Clear();
    }

    delete this.dialogs;
    delete this.mouseSprite;
  }
}
