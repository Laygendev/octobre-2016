var Data;
(function (Data) {
    var Sound = (function () {
        function Sound() {
        }
        Sound.Load = function () {
            Data.Sound
                .AddSound("ambiant", "jail/sounds/bensound-psychedelic.mp3", 1)
                .AddSound("orderPop", "jail/sounds/orderPop.mp3", 1)
                .AddSound("joinOk", "jail/sounds/joinOk", 1)
                .AddSound("joinFail", "jail/sounds/joinFail.mp3", 1)
                .AddSound("sendHuman", "jail/sounds/sendHuman.mp3", 1)
                .AddSound("deleteHuman", "jail/sounds/deleteHuman.mp3", 1)
                .AddSound("takeBody", "jail/sounds/takeBody.mp3", 1)
                .AddSound("countdown", "jail/sounds/countdown.mp3", 3)
                .AddSound("timer", "jail/sounds/timer.mp3", 1);
            Data.Sound.PlaySound("ambiant", true);
            SceneManager.Manager.SetScene(new Level11('body0'));
        };
        Sound.AddSound = function (name, src, maxChannels) {
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
        Sound.ClearSounds = function () {
            delete Data.Sound.sounds;
            Data.Sound.sounds = {};
            return Data.Sound;
        };
        Sound.RemoveSound = function (name) {
            delete Data.Sound.sounds[name];
            return Data.Sound;
        };
        Sound.PlaySound = function (name, loop) {
            if (Data.Sound.sounds[name].index >= Data.Sound.sounds[name].length) {
                Data.Sound.sounds[name].index = 0;
            }
            if (loop) {
                Data.Sound.sounds[name][Data.Sound.sounds[name].index].addEventListener("ended", Data.Sound.LoopCallback, false);
            }
            Data.Sound.sounds[name][Data.Sound.sounds[name].index++].play();
            return Data.Sound.sounds[name].index;
        };
        Sound.PauseChannel = function (name, index) {
            if (!Data.Sound.sounds[name][index].paused) {
                Data.Sound.sounds[name][index].pause();
            }
            return Data.Sound;
        };
        Sound.ResetChannel = function (name, index) {
            Data.Sound.sounds[name][index].currentTime = 0;
            Data.Sound.StopLoop(name, index);
            return Data.Sound;
        };
        ;
        Sound.PauseSound = function (name) {
            for (var i = 0; i < Data.Sound.sounds[name].length; i++) {
                if (!Data.Sound.sounds[name][i].paused) {
                    Data.Sound.sounds[name][i].pause();
                }
            }
            return Data.Sound;
        };
        ;
        Sound.ResetSound = function (name) {
            for (var i = 0; i < Data.Sound.sounds[name].length; i++) {
                Data.Sound.sounds[name].currentTime = 0;
                Data.Sound.StopLoop(name, i);
            }
            return Data.Sound;
        };
        ;
        Sound.StopLoop = function (name, index) {
        };
        Sound.LoopCallback = function () {
            Data.Sound.currentTime = -1;
        };
        return Sound;
    }());
    Sound.sounds = {};
    Sound.currentTime = 0;
    Data.Sound = Sound;
})(Data || (Data = {}));
;
//# sourceMappingURL=Sound.js.map