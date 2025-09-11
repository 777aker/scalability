import { Application, Graphics } from "pixi.js";
import { Window } from "./window";
import { COLORS } from "./constants";
import { get_keys_pressed } from "./main";

export class SnakeGame extends Window {
  // initialize snake game
  constructor(app) {
    super(200, 100, 400, 400, COLORS.deep_koamaru, COLORS.exodus_fruit, app);

    // snake variables
    this.snake_head = -1;
    this.snake_width = 10;
    this.snake_height = 10;
    this.snake_speed = 10;
    this.snake_time = 0;
    this.snake_body = [];
    this.snake_direction = [1, 0];
    this.make_snake_segment(this.window_width / 2, this.window_height / 2);

    // this.pixi_app.stage.addEventListener("keydown", (event) => {
    //   console.log("key pressed");
    //   this.key_down(event, this);
    // });

    // unfortunately, to see this variables we have to just do this
    // it needs to happen after init anyway
    this.pixi_app.ticker.add((ticker) => {
      this.tick_window(ticker);
    });
  }

  // snake game tick
  tick_window(ticker) {
    this.snake_time += ticker.deltaTime;
    this.handle_keys();

    if (this.snake_time < this.snake_speed) {
      return;
    }

    this.snake_time = 0;
    const snake_tail = this.snake_body[0];
    const snake_head = this.snake_body[this.snake_head];
    snake_tail.position.set(
      snake_head.x + this.snake_direction[0] * this.snake_width,
      snake_head.y + this.snake_direction[1] * this.snake_height
    );
  }

  // create graphics object, attach to window, and place in body
  make_snake_segment(x, y) {
    const snake_segment = new Graphics()
      .rect(x, y, this.snake_width, this.snake_height)
      .fill(COLORS.pure_apple);
    this.snake_body.push(snake_segment);
    this.snake_head += 1;
    this.window.addChild(snake_segment);
  }

  // handle keys
  handle_keys() {
    const keys_pressed = get_keys_pressed();
    if (keys_pressed.indexOf("w") !== -1) {
      this.snake_direction = [0, -1];
    }
    if (keys_pressed.indexOf("a") !== -1) {
      this.snake_direction = [-1, 0];
    }
    if (keys_pressed.indexOf("s") !== -1) {
      this.snake_direction = [0, 1];
    }
    if (keys_pressed.indexOf("d") !== -1) {
      this.snake_direction = [1, 0];
    }
  }
}
