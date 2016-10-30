/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module Data {
  export class Sound {
    static sounds: any = {};
    static currentTime: number = 0;

    static Load():void {
      Data.Sound
        .AddSound("ambiant", "jail/sounds/bensound-psychedelic.mp3", 1) // OK
        .AddSound("orderPop", "jail/sounds/orderPop.mp3", 1)
        .AddSound("joinOk", "jail/sounds/joinOk.mp3", 1) // OK
        .AddSound("joinFail", "jail/sounds/joinFail.mp3", 1) // OK
        .AddSound("send", "jail/sounds/send.mp3", 1) // OK
        .AddSound("poubelle", "jail/sounds/poubelle.mp3", 1) // OK
        .AddSound("takeBody", "jail/sounds/takeBody.mp3", 1) // OK
        .AddSound("countdown", "jail/sounds/countdown.mp3", 3) // OK
        .AddSound("timer", "jail/sounds/timer.mp3", 1) // OK
        .AddSound("wrong", "jail/sounds/wrong.mp3", 1) // OK
        .AddSound("explosion", "jail/sounds/explosion.mp3", 1) // OK
        .AddSound("speak", "jail/sounds/speak.mp3", 1) // OK

      Data.Sound.PlaySound("ambiant", true);
      SceneManager.Manager.SetScene(new LevelDidacticiel());
    }

    static AddSound(name: string, src: string, maxChannels: number):any {
      Data.Sound.sounds[name] = [];
      Data.Sound.sounds[name].index = 0;
      if (!maxChannels) {
        maxChannels = 3;
      }
      for (var i = 0; i < maxChannels; i++) {
        Data.Sound.sounds[name][i] = new Audio(src);
      }
      return Data.Sound;
    }

    static ClearSounds():any {
      delete Data.Sound.sounds;
      Data.Sound.sounds = {};
      return Data.Sound;
    }

    static RemoveSound(name: string):any {
      delete Data.Sound.sounds[name];
      return Data.Sound;
    }

    static PlaySound(name: string, loop: boolean):any {
      if (Data.Sound.sounds[name].index >= Data.Sound.sounds[name].length) {
        Data.Sound.sounds[name].index = 0;
      }
      if (loop) {
        Data.Sound.sounds[name][Data.Sound.sounds[name].index].addEventListener("ended", () => { this.PlaySound(name, false); }, false);
      }
      Data.Sound.sounds[name][Data.Sound.sounds[name].index++].play();
      return Data.Sound.sounds[name].index;
    }

    static PauseChannel(name: string, index: number):any {
      if (!Data.Sound.sounds[name][index].paused) {
        Data.Sound.sounds[name][index].pause();
      }
      return Data.Sound;
    }

    static ResetChannel(name: string, index: number):any {
      Data.Sound.sounds[name][index].currentTime = 0;
      Data.Sound.StopLoop(name, index);
      return Data.Sound;
    };

    static PauseSound(name: string):any {
      for (var i = 0; i < Data.Sound.sounds[name].length; i++) {
        if (!Data.Sound.sounds[name][i].paused) {
          Data.Sound.sounds[name][i].pause();
        }
      }
      return Data.Sound;
    };

    static ResetSound(name:string):any {
      for (var i = 0; i < Data.Sound.sounds[name].length; i++) {
        Data.Sound.sounds[name].currentTime = 0;
        Data.Sound.StopLoop(name, i);
      }
      return Data.Sound;
    };

    static StopLoop(name: string, index: number):void {

    }

    static LoopCallback():void {
      Data.Sound.currentTime = -1;
      Data.Sound.play();
    }
  }
};
