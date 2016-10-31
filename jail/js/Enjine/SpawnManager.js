var SpawnManager = (function () {
    function SpawnManager() {
        this.spriteToAdd = [];
        this.spriteGenerator = new SpriteGenerator();
    }
    SpawnManager.prototype.Exec = function (currentTime) {
        if (this.spriteToAdd[currentTime]) {
            for (var key in this.spriteToAdd[currentTime]) {
                var name_1 = this.spriteToAdd[currentTime][key];
                var sprite = void 0;
                if (name_1.substr(0, 4) === "body") {
                    var posBody = Helper.Body.RandomPosBody();
                    var zone = Data.Object.bodies[this.spriteToAdd[currentTime][key]];
                    sprite = new Sprite(Data.Images.spriteSheet, this.spriteToAdd[currentTime][key], 'body', { x: posBody.x, y: posBody.y });
                    sprite.SetPos({ x: global.hWidth + posBody.x, y: global.height - 180 + posBody.y });
                    sprite.angle = posBody.angle;
                    sprite.SetZone(zone);
                    sprite.SetClickable({ w: zone.width, h: zone.height }, { x: zone.width / 2, y: zone.height / 2 }, Helper.Body.Exec);
                    SceneManager.Manager.currentScene.bodyManager.Add(sprite);
                }
                else {
                    sprite = this.spriteGenerator.Exec(this.spriteToAdd[currentTime][key]);
                    sprite.SetCollider();
                    SceneManager.Manager.currentScene.spriteManager.Add(sprite);
                }
            }
        }
    };
    SpawnManager.prototype.Clear = function () {
    };
    SpawnManager.prototype.Add = function (listName) {
        for (var key in listName) {
            var infos = listName[key].split('_');
            var number = parseInt(infos[0]) + 10;
            var doublonInfos = [number, infos[1]];
            if (!this.spriteToAdd[infos[0]]) {
                this.spriteToAdd[infos[0]] = [];
            }
            if (!this.spriteToAdd[doublonInfos[0]]) {
                this.spriteToAdd[doublonInfos[0]] = [];
            }
            this.spriteToAdd[infos[0]].push(infos[1]);
            this.spriteToAdd[doublonInfos[0]].push(doublonInfos[1]);
        }
    };
    return SpawnManager;
}());
//# sourceMappingURL=SpawnManager.js.map