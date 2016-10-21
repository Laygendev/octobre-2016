/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

Game.LoadingState = {
  Zones: {},
  ZonesBodies: {},
  ImagesLoaded: false,
  ScreenColor: 0,
  ColorDirection: 1,
  ImageIndex: 0,
  SoundIndex: 0,
	WaitRequest: {},
	Completed: false,

  Enter: function() {
		this.WaitRequest.Bodies = true;
		this.WaitRequest.Elements = true;

    Enjine.JSON.Load('jail/json/loadBodies.json', (json) => {
			this.ZonesBodies = json;
			this.WaitRequest.Bodies = false;
			Enjine.Resources.AddZonesBodies(this.ZonesBodies);
		});

    Enjine.JSON.Load('jail/json/loadElements.json', (json) => {
			this.Zones = json;
			this.WaitRequest.Elements = false;
			Enjine.Resources.AddZones(this.Zones);
		});

    Enjine.Resources.AddElement("jail/images/elements.png");
  },

  Update: function(delta) {
		if (!this.Completed) {
			if (!this.WaitRequest.Bodies && !this.WaitRequest.Elements) {
	      Enjine.Application.SetState(Game.LevelState);
				this.Completed = true;
			}
		}
  }
};
