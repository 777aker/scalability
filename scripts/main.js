import { Application, Graphics, RenderLayer } from "pixi.js";
import { SnakeGame } from "./snake";

// global variable storing mouse so everyone can see where it is
var mouse_global;

// global getter for mouse position
export function get_mouse() {
  return mouse_global;
}

// start pixijs application
(async () => {
  // init app
  const app = new Application();
  await app.init({
    resizeTo: window,
    antialias: true,
    backgroundColor: 0x2c3e50,
  });

  // set app properties
  app.canvas.style.position = "absolute";
  document.body.appendChild(app.canvas);
  app.stage.eventMode = "static";
  app.ticker.maxFPS = 60;
  app.stage.addEventListener("pointermove", (e) => {
    mouse_global = e.global;
  });
  app.stage.sortableChildren = true;

  // initialize snake game
  const snake_game = new SnakeGame(app);
})();
