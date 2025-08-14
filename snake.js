import { Application, Graphics } from "pixi.js";
import { Window } from "./window";

export class SnakeGame extends Window {
  constructor(x, y, width, height, bg_color, st_color, app) {
    super(x, y, width, height, bg_color, st_color, app);
  }

  run_snake() {
    this.draw_window();
  }
}
