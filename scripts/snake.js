import { Application, Graphics } from "pixi.js";
import { Window } from "./window";

export class SnakeGame extends Window {
  // initialize snake game
  constructor(app) {
    super(200, 100, 400, 400, 0x34495e, 0x7f8c8d, app);
  }

  // snake game tick
  tick_window(ticker) {
    // do nothing rn
  }

  // event won't actually know who this is so pass window_obj to it
  close_window(window_obj) {
    // do nothing rn
  }
}
