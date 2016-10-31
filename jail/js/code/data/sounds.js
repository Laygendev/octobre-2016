var Data;
(function (Data) {
    var Sounds = (function () {
        function Sounds() {
        }
        Sounds.Load = function (cb) {
            Data.Sounds
                .AddSound("ambiant", "jail/sounds/ambiant.mp3", 1)
                .AddSound("orderPop", "jail/sounds/orderPop.mp3", 1)
                .AddSound("joinOk", "jail/sounds/joinOk.mp3", 1)
                .AddSound("send", "jail/sounds/send.mp3", 1)
                .AddSound("poubelle", "jail/sounds/poubelle.mp3", 1)
                .AddSound("takeBody", "jail/sounds/takeBody.mp3", 1)
                .AddSound("countdown", "jail/sounds/countdown.mp3", 3)
                .AddSound("timer", "jail/sounds/timer.mp3", 1)
                .AddSound("wrong", "jail/sounds/wrong.mp3", 1);
            this.PlaySound("ambiant", true);
            cb();
        };
        Sounds.AddSound = function (name, src, maxChannels) {
            Data.Sounds.sounds[name] = [];
            Data.Sounds.sounds[name].index = 0;
            if (!maxChannels) {
                maxChannels = 3;
            }
            for (var i = 0; i < maxChannels; i++) {
                Data.Sounds.sounds[name][i] = new Audio(src);
            }
            return Data.Sounds;
        };
        Sounds.PlaySound = function (name, loop) {
            var _this = this;
            if (Data.Sounds.sounds[name].index >= Data.Sounds.sounds[name].length) {
                Data.Sounds.sounds[name].index = 0;
            }
            if (loop) {
                Data.Sounds.sounds[name][Data.Sounds.sounds[name].index].addEventListener("ended", function () { _this.PlaySound(name, false); }, false);
            }
            Data.Sounds.sounds[name][Data.Sounds.sounds[name].index++].play();
            return Data.Sounds.sounds[name].index;
        };
        Sounds.sounds = [];
        return Sounds;
    }());
    Data.Sounds = Sounds;
})(Data || (Data = {}));
;
//# sourceMappingURL=Sounds.js.map