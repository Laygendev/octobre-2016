/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Timer {
  secondTime: number = 0;
  countdown: number = 3;
  intervalTimer: any = undefined;
  notifications: any = undefined;
  notificationManager: NotificationManager = undefined;
  /**
  * Le constructeur permet appelle LoadCanvas
  */
  constructor(public time: number, public maxTime: number, public mainScene: MainScene) {
    this.Init();
  }

  public Init():void {
    Data.Sound.PlaySound('countdown', false);

    this.intervalTimer = setInterval(() => { this.Update() }, this.time);
  }

  public Update():void {
    this.secondTime += 1;
    this.CheckNotification();

    if (this.countdown > 0) {
      this.countdown--;
    }
    else {
      if (!this.mainScene.started) {
        // this.mainScene.started = true;
      }
    }

    this.mainScene.Spawn(this.secondTime);

    if (this.secondTime >= this.maxTime) {
      this.mainScene.ChangeScene();
    }
  }

  public Draw(context: any):void {
    context.font = "30px Source Sans Pro Bold";
    context.fillText("Temps restant: " + (this.maxTime - this.secondTime), (global.size.width / 2) - 100, 50);

    if(this.countdown > 0) {
      context.font = "100px Source Sans Pro Bold";
      context.fillText(this.countdown, (global.size.width / 2) - 50, (global.size.height / 2) - 50);
    }
  }

  public LoadNotification(notificationManager: NotificationManager, pathJson: string):void {
    this.notificationManager = notificationManager;
    Data.JSONLoader.Exec(pathJson, (data: Array<any>) => {
      this.notifications = data;
    });
  }

  public CheckNotification():void {
      // this.secondTime
      if (this.notificationManager) {
        if (this.notifications && this.notifications[this.secondTime]) {
          for (var key in this.notifications[this.secondTime]) {
            this.notificationManager.Add(new Notification(this.notifications[this.secondTime][key].text, { x: this.notifications[this.secondTime][key].x, y: this.notifications[this.secondTime][key].y}, this.notifications[this.secondTime][key].size ))
          }
        }
      }
  }

  public Clear():void {
    clearInterval(this.intervalTimer);
    delete this.intervalTimer;
    delete this.maxTime;
    delete this.secondTime;
    delete this.mainScene;
  }
}
