/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module Data {
  export class Sounds {
    static sounds: any = undefined;

    static Load(cb: () => void):void {
      Data.Sounds
        .AddSound("ambiant", "jail/sounds/bensound-psychedelic.mp3", 1)
        .AddSound("orderPop", "jail/sounds/orderPop.mp3", 1)
        .AddSound("joinOk", "jail/sounds/joinOk.mp3", 1)
        .AddSound("joinFail", "jail/sounds/joinFail.mp3", 1)
        .AddSound("send", "jail/sounds/send.mp3", 1)
        .AddSound("poubelle", "jail/sounds/poubelle.mp3", 1)
        .AddSound("takeBody", "jail/sounds/takeBody.mp3", 1)
        .AddSound("countdown", "jail/sounds/countdown.mp3", 3)
        .AddSound("timer", "jail/sounds/timer.mp3", 1)
        .AddSound("wrong", "jail/sounds/wrong.mp3", 1)
        .AddSound("explosion", "jail/sounds/explosion.mp3", 1)
        .AddSound("speak", "jail/sounds/speak.mp3", 1)

        cb();
    }

    static AddSound(name: string, src: string, maxChannels: number):any {
      Data.Sounds.sounds[name] = [];
      Data.Sounds.sounds[name].index = 0;
      if (!maxChannels) {
        maxChannels = 3;
      }
      for (var i = 0; i < maxChannels; i++) {
        Data.Sounds.sounds[name][i] = new Audio(src);
      }
      return Data.Sounds;
    }

    static PlaySound(name: string, loop: boolean):any {
      if (Data.Sounds.sounds[name].index >= Data.Sounds.sounds[name].length) {
        Data.Sounds.sounds[name].index = 0;
      }
      if (loop) {
        Data.Sounds.sounds[name][Data.Sounds.sounds[name].index].addEventListener("ended", () => { this.PlaySound(name, false); }, false);
      }
      Data.Sounds.sounds[name][Data.Sounds.sounds[name].index++].play();
      return Data.Sounds.sounds[name].index;
    }
  }
};
