module Helper {
  export class Images {
    static RandomHumanPart():string {
      var randomNumber: number = Math.floor(Math.random() * (0 - (this.numberHumanPart))) + this.numberHumanPart;
      var i = 0;
      for (var key in this.humanPart) {
        if (i == randomNumber) {
          return key;
        }
        i++;
      }

      return undefined;
    }

    static RandomBody():string {
      var randomNumber: number = Math.floor(Math.random() * (0 - (this.numberBodies))) + this.numberBodies;
      var i = 0;
      for (var key in this.bodies) {
        if (i == randomNumber) {
          return key;
        }
        i++;
      }

      return undefined;
    }

    static RandomPosBody():any {
      var randomNumber: number = Math.floor(Math.random() * (0 - (this.bodySpawn.length))) + this.bodySpawn.length;
      let tmp = this.bodySpawn[randomNumber];
      this.bodySpawn.splice(randomNumber, 1);

      return tmp;
    }

    static RandomPosOrder():any {
      var randomNumber: number = Math.floor(Math.random() * (0 - (this.orderSpawn.length))) + this.orderSpawn.length;
      let tmp = this.orderSpawn[randomNumber];
      this.orderSpawn.splice(randomNumber, 1);
      return tmp;
    }
  }
}
