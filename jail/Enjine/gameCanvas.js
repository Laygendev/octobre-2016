/**
Base class to represent a double buffered canvas object.
Code by Rob Kleffner, 2011
*/

Enjine.GameCanvas = {
	Canvas: null,
	Context2D: null,
	BackBuffer: null,
	BackBufferContext2D: null,

	Initialize: function(canvasId, resWidth, resHeight) {
		this.Canvas = document.getElementById(canvasId);
		this.Canvas.width = document.body.clientWidth; //document.width is obsolete
    this.Canvas.height = document.body.clientHeight; //document.height is obsolete

		this.Context2D = this.Canvas.getContext("2d");

		this.BackBuffer = document.createElement("canvas");
		this.BackBuffer.width = document.body.clientWidth; //document.width is obsolete
    this.BackBuffer.height = document.body.clientHeight; //document.height is obsolete
		this.BackBufferContext2D = this.BackBuffer.getContext("2d");
	},

	BeginDraw: function() {
		this.BackBufferContext2D.clearRect(0, 0, this.BackBuffer.width, this.BackBuffer.height);
		this.Context2D.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
	},

	EndDraw: function() {
		this.Context2D.drawImage(this.BackBuffer, 0, 0, this.BackBuffer.width, this.BackBuffer.height, 0, 0, this.Canvas.width, this.Canvas.height);
	}
};
