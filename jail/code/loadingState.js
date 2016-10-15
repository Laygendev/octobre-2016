/**
	State that loads all the resources for the game.
	Code by Rob Kleffner, 2011
*/

Game.LoadingState = function() {
    this.Images = [];
    this.ImagesLoaded = false;
    this.ScreenColor = 0;
    this.ColorDirection = 1;
    this.ImageIndex = 0;
    this.SoundIndex = 0;
};

Game.LoadingState.prototype = new Enjine.GameState();

Game.LoadingState.prototype.Enter = function() {
    var i = 0;
    for (i = 0; i < 15; i++) {
        this.Images[i] = {};
    }

    this.Images[0].name = "background";
    this.Images[1].name = "endScene";
    this.Images[2].name = "enemies";
    this.Images[3].name = "fireMario";
    this.Images[4].name = "font";
    this.Images[5].name = "gameOverGhost";
    this.Images[6].name = "items";
    this.Images[7].name = "logo";
    this.Images[8].name = "map";
    this.Images[9].name = "mario";
    this.Images[10].name = "particles";
    this.Images[11].name = "racoonMario";
    this.Images[12].name = "smallMario";
    this.Images[13].name = "title";
    this.Images[14].name = "worldMap";

    this.Images[0].src = "jail/images/bgsheet.png";
    this.Images[1].src = "jail/images/endscene.gif";
    this.Images[2].src = "jail/images/enemysheet.png";
    this.Images[3].src = "jail/images/firemariosheet.png";
    this.Images[4].src = "jail/images/font.gif";
    this.Images[5].src = "jail/images/gameovergost.gif";
    this.Images[6].src = "jail/images/itemsheet.png";
    this.Images[7].src = "jail/images/logo.gif";
    this.Images[8].src = "jail/images/mapsheet.png";
    this.Images[9].src = "jail/images/mariosheet.png";
    this.Images[10].src = "jail/images/particlesheet.png";
    this.Images[11].src = "jail/images/racoonmariosheet.png";
    this.Images[12].src = "jail/images/smallmariosheet.png";
    this.Images[13].src = "jail/images/title.gif";
    this.Images[14].src = "jail/images/worldmap.png";

    Enjine.Resources.AddImages(this.Images);

    var testAudio = new Audio();

    if (testAudio.canPlayType("audio/mp3")) {
    	Enjine.Resources.AddSound("1up", "jail/sounds/1-up.mp3", 1)
		    .AddSound("breakblock", "jail/sounds/breakblock.mp3")
		    .AddSound("bump", "jail/sounds/bump.mp3", 4)
		    .AddSound("cannon", "jail/sounds/cannon.mp3")
		    .AddSound("coin", "jail/sounds/coin.mp3", 5)
		    .AddSound("death", "jail/sounds/death.mp3", 1)
		    .AddSound("exit", "jail/sounds/exit.mp3", 1)
		    .AddSound("fireball", "jail/sounds/fireball.mp3", 1)
		    .AddSound("jump", "jail/sounds/jump.mp3")
		    .AddSound("kick", "jail/sounds/kick.mp3")
		    .AddSound("pipe", "jail/sounds/pipe.mp3", 1)
		    .AddSound("powerdown", "jail/sounds/powerdown.mp3", 1)
		    .AddSound("powerup", "jail/sounds/powerup.mp3", 1)
		    .AddSound("sprout", "jail/sounds/sprout.mp3", 1)
		    .AddSound("stagestart", "jail/sounds/stagestart.mp3", 1)
		    .AddSound("stomp", "jail/sounds/stomp.mp3", 2);
    } else {
	    Enjine.Resources.AddSound("1up", "sounds/jail/1-up.wav", 1)
		    .AddSound("breakblock", "sounds/jail/breakblock.wav")
		    .AddSound("bump", "sounds/jail/bump.wav", 2)
		    .AddSound("cannon", "sounds/jail/cannon.wav")
		    .AddSound("coin", "sounds/jail/coin.wav", 5)
		    .AddSound("death", "sounds/jail/death.wav", 1)
		    .AddSound("exit", "sounds/jail/exit.wav", 1)
		    .AddSound("fireball", "sounds/jail/fireball.wav", 1)
		    .AddSound("jump", "sounds/jail/jump.wav", 1)
		    .AddSound("kick", "sounds/jail/kick.wav", 1)
		    .AddSound("message", "sounds/jail/message.wav", 1)
		    .AddSound("pipe", "sounds/jail/pipe.wav", 1)
		    .AddSound("powerdown", "sounds/jail/powerdown.wav", 1)
		    .AddSound("powerup", "sounds/jail/powerup.wav", 1)
		    .AddSound("sprout", "sounds/jail/sprout.wav", 1)
		    .AddSound("stagestart", "sounds/jail/stagestart.wav", 1)
		    .AddSound("stomp", "sounds/jail/stomp.wav", 1);
    }

    //load the array of tile behaviors
    // Game.Tile.LoadBehaviors();
};

Game.LoadingState.prototype.Exit = function() {
    delete this.Images;
};

Game.LoadingState.prototype.Update = function(delta) {
    if (!this.ImagesLoaded) {
        this.ImagesLoaded = true;
        var i = 0;
        for (i = 0; i < this.Images.length; i++) {
            if (Enjine.Resources.Images[this.Images[i].name].complete !== true) {
                this.ImagesLoaded = false;
                break;
            }
        }
    }

    this.ScreenColor += this.ColorDirection * 255 * delta;
    if (this.ScreenColor > 255) {
        this.ScreenColor = 255;
        this.ColorDirection = -1;
    } else if (this.ScreenColor < 0) {
        this.ScreenColor = 0;
        this.ColorDirection = 1;
    }
};

Game.LoadingState.prototype.Draw = function(context) {
    if (!this.ImagesLoaded) {
        var color = parseInt(this.ScreenColor, 10);
        context.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
        context.fillRect(0, 0, 640, 480);
    } else {
        context.fillStyle = "rgb(0, 0, 0)";
        context.fillRect(0, 0, 640, 480);
    }
};

Game.LoadingState.prototype.CheckForChange = function(context) {
    if (this.ImagesLoaded) {
		//set up the global map state variable
			// Game.GlobalMapState = new Game.MapState();

        // context.ChangeState(new Game.TitleState());
    }
};
