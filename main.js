import { Application, Graphics } from "pixi.js";
import { SnakeGame } from "./snake";

(async () => {
  const app = new Application();
  await app.init({
    resizeTo: window,
    antialias: true,
    backgroundColor: 0x34495e,
  });

  app.canvas.style.position = "absolute";
  document.body.appendChild(app.canvas);

  const snake_game = new SnakeGame();
  snake_game.run_snake(app);
})();
