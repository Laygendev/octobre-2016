/**
Simple demo of the engine.
Code by Rob Kleffner, 2011
*/

Enjine.Application = {
  canvas: null,
  timer: null,
  stateContext: null,
  Update: function(delta) {

    this.stateContext.Update(delta);

    this.canvas.BeginDraw();

    this.stateContext.Draw(this.canvas.BackBufferContext2D);

    this.canvas.EndDraw();
  },

  Initialize: function(defaultState, resWidth, resHeight) {
    this.canvas = Enjine.GameCanvas;
    this.timer = new Enjine.GameTimer();
    this.canvas.Initialize("canvas", resWidth, resHeight);
    Enjine.Mouse.Initialize(Enjine.GameCanvas.Canvas);
    this.timer.UpdateObject = this;
    defaultState.Enter();
    this.stateContext = defaultState;
    this.timer.Start();
  },

  SetState: function(state) {
    this.stateContext = state;
    state.Enter();
  }
};
