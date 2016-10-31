var Helper;
(function (Helper) {
    var Body = (function () {
        function Body() {
        }
        Body.RandomPosBody = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (Data.Object.bodiesSpawn.length))) + Data.Object.bodiesSpawn.length;
            var tmp = Data.Object.bodiesSpawn[randomNumber];
            Data.Object.bodiesSpawn.splice(randomNumber, 1);
            return tmp;
        };
        Body.Exec = function (triggerElement) {
            SceneManager.Manager.currentScene.InitCharacter(triggerElement);
            Data.Sounds.PlaySound("takeBody", false);
        };
        return Body;
    }());
    Helper.Body = Body;
})(Helper || (Helper = {}));
//# sourceMappingURL=Body.js.map