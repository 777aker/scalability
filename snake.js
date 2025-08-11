import { Application, Graphics } from "pixi.js";

export class SnakeGame {
  constructor() {}
  run_snake(app) {
    const rectangle = new Graphics().rect(700, 200, 100, 150).fill({
      color: 0x9b59b6,
      alpha: 0.5,
    });
    app.stage.addChild(rectangle);
  }
}
