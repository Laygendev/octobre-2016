var SceneManager;
(function (SceneManager) {
    var Manager = (function () {
        function Manager() {
        }
        Manager.SetScene = function (levelScene) {
            this.currentScene = levelScene;
            levelScene.Init();
        };
        Manager.Update = function () {
            this.currentScene.Update();
        };
        Manager.Draw = function (context) {
            this.currentScene.Draw(context);
        };
        return Manager;
    }());
    SceneManager.Manager = Manager;
})(SceneManager || (SceneManager = {}));
//# sourceMappingURL=SceneManager.js.map