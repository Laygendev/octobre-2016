/**
Base class to represent a double buffered canvas object.
Code by Rob Kleffner, 2011
Modifié par Jimmy Latour, 2016
http://labodudev.fr
*/
*/

Enjine.GameCanvas = {
	Canvas: null,
	Context2D: null,
	BackBuffer: null,
	BackBufferContext2D: null,

	Initialize: function(canvasId, resWidth, resHeight) {
		this.Canvas = document.getElementById(canvasId);
		this.Canvas.width = window.innerWidth; //document.width is obsolete
    this.Canvas.height = window.innerHeight; //document.height is obsolete

		this.Context2D = this.Canvas.getContext("2d");

		this.BackBuffer = document.createElement("canvas");
		this.BackBuffer.width = window.innerWidth; //document.width is obsolete
    this.BackBuffer.height = window.innerHeight; //document.height is obsolete
		this.BackBufferContext2D = this.BackBuffer.getContext("2d");

		window.addEventListener('resize', this.ResizeCanvas, false);
	},

	BeginDraw: function() {
		this.BackBufferContext2D.clearRect(0, 0, this.BackBuffer.width, this.BackBuffer.height);
		this.Context2D.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
	},

	EndDraw: function() {
		this.Context2D.drawImage(this.BackBuffer, 0, 0, this.BackBuffer.width, this.BackBuffer.height, 0, 0, this.Canvas.width, this.Canvas.height);
	},

	ResizeCanvas: function() {
		Enjine.GameCanvas.Canvas.width = window.innerWidth;
		Enjine.GameCanvas.Canvas.height = window.innerHeight;

		Enjine.GameCanvas.BackBuffer.width = window.innerWidth;
		Enjine.GameCanvas.BackBuffer.height = window.innerHeight;
	}
};
