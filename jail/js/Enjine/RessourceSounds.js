var Data;
(function (Data) {
    var Sounds = (function () {
        function Sounds() {
        }
        Sounds.Load = function (cb) {
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
                .AddSound("speak", "jail/sounds/speak.mp3", 1);
            cb();
        };
        Sounds.AddSound = function (name, src, maxChannels) {
            Data.Sound.sounds[name] = [];
            Data.Sound.sounds[name].index = 0;
            if (!maxChannels) {
                maxChannels = 3;
            }
            for (var i = 0; i < maxChannels; i++) {
                Data.Sound.sounds[name][i] = new Audio(src);
            }
            return Data.Sound;
        };
        Sounds.ClearSounds = function () {
            delete Data.Sound.sounds;
            Data.Sound.sounds = {};
            return Data.Sound;
        };
        Sounds.RemoveSound = function (name) {
            delete Data.Sound.sounds[name];
            return Data.Sound;
        };
        Sounds.PlaySound = function (name, loop) {
            var _this = this;
            if (Data.Sound.sounds[name].index >= Data.Sound.sounds[name].length) {
                Data.Sound.sounds[name].index = 0;
            }
            if (loop) {
                Data.Sound.sounds[name][Data.Sound.sounds[name].index].addEventListener("ended", function () { _this.PlaySound(name, false); }, false);
            }
            Data.Sound.sounds[name][Data.Sound.sounds[name].index++].play();
            return Data.Sound.sounds[name].index;
        };
        Sounds.PauseChannel = function (name, index) {
            if (!Data.Sound.sounds[name][index].paused) {
                Data.Sound.sounds[name][index].pause();
            }
            return Data.Sound;
        };
        Sounds.ResetChannel = function (name, index) {
            Data.Sound.sounds[name][index].currentTime = 0;
            Data.Sound.StopLoop(name, index);
            return Data.Sound;
        };
        ;
        Sounds.PauseSound = function (name) {
            for (var i = 0; i < Data.Sound.sounds[name].length; i++) {
                if (!Data.Sound.sounds[name][i].paused) {
                    Data.Sound.sounds[name][i].pause();
                }
            }
            return Data.Sound;
        };
        ;
        Sounds.ResetSound = function (name) {
            for (var i = 0; i < Data.Sound.sounds[name].length; i++) {
                Data.Sound.sounds[name].currentTime = 0;
                Data.Sound.StopLoop(name, i);
            }
            return Data.Sound;
        };
        ;
        Sounds.StopLoop = function (name, index) {
        };
        Sounds.LoopCallback = function () {
            Data.Sound.currentTime = -1;
            Data.Sound.play();
        };
        Sounds.sounds = {};
        Sounds.currentTime = 0;
        return Sounds;
    }());
    Data.Sounds = Sounds;
})(Data || (Data = {}));
;
//# sourceMappingURL=RessourceSounds.js.map