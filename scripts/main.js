import { Application, Graphics } from "pixi.js";
import { SnakeGame } from "./snake";

var mouse_global;

export function get_mouse() {
  return mouse_global;
};

(async () => {
  const app = new Application();
  await app.init({
    resizeTo: window,
    antialias: true,
    backgroundColor: 0x2c3e50,
  });

  app.canvas.style.position = "absolute";
  document.body.appendChild(app.canvas);
  app.stage.eventMode = 'static';
  app.ticker.maxFPS = 60;
  app.stage.addEventListener('pointermove', (e) => {
    mouse_global = e.global;
  });

  const snake_game = new SnakeGame(app);

  app.ticker.add((ticker) => {
    snake_game.run_snake(app);
  });
})();
