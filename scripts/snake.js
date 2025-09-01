import { Application, Graphics } from "pixi.js";
import { Window } from "./window";

export class SnakeGame extends Window {
  constructor(app) {
    super(200, 100, 400, 400, 0x34495e, 0x7f8c8d, app);
  }

  run_snake() {
    this.draw_window();
  }
}
