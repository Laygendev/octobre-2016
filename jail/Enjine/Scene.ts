/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Scene {
  public started: boolean = false;
  public notificationManager: NotificationManager = new NotificationManager();

  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor() {}

  public Start():void {}

  public Init():void {}

  public Update(delta: number):void {}

  public Draw(context: any):void {}

  public UpdateNoStarted(delta: number):void {}

  public DrawNoStarted(context: any):void {}
}
