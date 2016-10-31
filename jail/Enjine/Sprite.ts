/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Sprite {
  public offset: any = {x: 0, y: 0};
  public spriteManager: SpriteManager = undefined;
  public scale: any = {
    x: 1.0,
    y: 1.0
  }
  public diff: number;
  public basePos: any = {x: 0, y: 0};


  constructor(public image: any, public name: string, public type: string, public pos: any) {
    // if (this.zone && this.zone.collider) {
    //   for (var key in this.zone.collider) {
    //     this.colliderPoint[key] = new ColliderPoint(this.zone.collider[key].x, this.zone.collider[key].y);
    //   }
    // }
  }

  protected Update(deltaTime: number):void {}

  public Draw(context: any):void {}

  public Clear():void {
    delete this.offset;
  }
}
