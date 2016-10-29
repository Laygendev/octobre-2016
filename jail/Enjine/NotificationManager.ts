/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class NotificationManager {
  listNotification: Array<Notification> = [];
  constructor() {}

  protected Init():void {

  }

  public Update():void {
  }

  public Draw(context: any):void {
    for (var key in this.listNotification) {
      this.listNotification[key].Draw(context);
    }
  }

  Add(notification: Notification): void {
	  this.listNotification.push(notification);
  }

  Remove(notification: Notification): void {
    for (var i = 0; i < this.listNotification.length; i++) {
      if (notification === this.listNotification[i]) {
        notification.Clear();
        this.listNotification.splice(i, 1);
      }
    }
  }

  Clear():void {

  }
}
