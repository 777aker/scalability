import { Application, Graphics } from "pixi.js";
import { SnakeGame } from "./snake";

(async () => {
  const app = new Application();
  await app.init({
    resizeTo: window,
    antialias: true,
    backgroundColor: 0x2c3e50,
  });

  app.canvas.style.position = "absolute";
  document.body.appendChild(app.canvas);

  const snake_game = new SnakeGame(200, 100, 400, 400, 0x34495e, 0x7f8c8d, app);

  app.ticker.add((ticker) => {
    snake_game.run_snake(app);
  });
})();
