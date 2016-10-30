var Helper;
(function (Helper) {
    var Images = (function () {
        function Images() {
        }
        Images.RandomHumanPart = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (this.numberHumanPart))) + this.numberHumanPart;
            var i = 0;
            for (var key in this.humanPart) {
                if (i == randomNumber) {
                    return key;
                }
                i++;
            }
            return undefined;
        };
        Images.RandomBody = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (this.numberBodies))) + this.numberBodies;
            var i = 0;
            for (var key in this.bodies) {
                if (i == randomNumber) {
                    return key;
                }
                i++;
            }
            return undefined;
        };
        Images.RandomPosBody = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (this.bodySpawn.length))) + this.bodySpawn.length;
            var tmp = this.bodySpawn[randomNumber];
            this.bodySpawn.splice(randomNumber, 1);
            return tmp;
        };
        Images.RandomPosOrder = function () {
            var randomNumber = Math.floor(Math.random() * (0 - (this.orderSpawn.length))) + this.orderSpawn.length;
            var tmp = this.orderSpawn[randomNumber];
            this.orderSpawn.splice(randomNumber, 1);
            return tmp;
        };
        return Images;
    }());
    Helper.Images = Images;
})(Helper || (Helper = {}));
//# sourceMappingURL=HelperImages.js.map