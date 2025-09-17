import { Application, Color, Graphics } from "pixi.js";
import { Window } from "./window";
import { COLORS } from "./constants";
import { get_keys_pressed } from "./main";
import {
  register_apples,
  add_apples_id,
  remove_apples_id,
  get_apples_id,
} from "./apples";

export class SnakeGame extends Window {
  // initialize snake game
  constructor(app) {
    super(200, 100, 400, 400, COLORS.deep_koamaru, COLORS.exodus_fruit, app);

    // snake variables
    this.snake_width = 10;
    this.snake_height = 10;
    this.snake_speed = 15;
    this.apple_size = 10;
    this.snake_time = 0;
    this.snake_body = [];
    this.snake_direction = [1, 0];
    this.apple_limit = 1;
    this.apples_spawned = [];
    this.apples_id = register_apples(0, "snake_icon.png", 200);
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
    this.move_snake();

    // if not at apple limit make an apple
    if (this.apples_spawned.length < this.apple_limit) {
      this.make_apple();
    }

    // check if we died
    this.check_died();
  }

  // move the snake
  move_snake() {
    // get tail and head
    const snake_tail = this.snake_body[0];
    const snake_head = this.snake_body[this.snake_body.length - 1];
    // move tail to head
    const new_x = snake_head.x + this.snake_direction[0] * this.snake_width;
    const new_y = snake_head.y + this.snake_direction[1] * this.snake_height;

    if (this.check_eat_apple(new_x, new_y)) {
      // if we did eat an apple
      // make a new head
      this.make_snake_segment(new_x, new_y);
    } else {
      // if we didn't eat an apple
      // shift the snake body graphics around
      snake_tail.position.set(new_x, new_y);
      this.snake_body.shift();
      this.snake_body.push(snake_tail);
    }
  }

  // check for snake death
  check_died() {
    const head = this.snake_body[this.snake_body.length - 1];
    // out of bounds
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x + this.snake_width > this.window_width ||
      head.y + this.snake_height > this.window_height
    ) {
      this.game_over();
    }
    // head went into body
    for (let i = 0; i < this.snake_body.length - 1; i++) {
      const body = this.snake_body[i];
      if (body.x == head.x && body.y == head.y) {
        this.game_over();
      }
    }
  }

  // check if intersecting with apple and destroy it if we are
  check_eat_apple(head_x, head_y) {
    // check if head intersecting apples spawned
    for (let i = 0; i < this.apples_spawned.length; i++) {
      const apple = this.apples_spawned[i];
      if (head_x == apple.x && head_y == apple.y) {
        this.window.removeChild(apple);
        this.apples_spawned[i].destroy();
        delete this.apples_spawned[i];
        this.apples_spawned.splice(i, 1);
        add_apples_id(1, this.apples_id);
        return true;
      }
    }
    return false;
  }

  // make a new apple
  make_apple() {
    // pick a random position
    const x = Math.floor(Math.random() * (this.window_width / this.apple_size));
    const y = Math.floor(
      Math.random() * (this.window_height / this.apple_size)
    );
    // if position in snake body, just give up it'll try again next frame
    for (let i = 0; i < this.snake_body.length; i++) {
      if (x == this.snake_body[i].x && y == this.snake_body[i].y) {
        return;
      }
    }
    const apple = new Graphics()
      .rect(0, 0, this.apple_size, this.apple_size)
      .fill(COLORS.carmine_pink);
    apple.position.set(x * this.apple_size, y * this.apple_size);
    this.apples_spawned.push(apple);
    this.window.addChild(apple);
  }

  // create graphics object, attach to window, and place in body
  make_snake_segment(x, y) {
    const snake_segment = new Graphics()
      .rect(0, 0, this.snake_width, this.snake_height)
      .fill(COLORS.pure_apple);
    snake_segment.position.set(x, y);
    this.snake_body.push(snake_segment);
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

  // handle a game over
  game_over() {
    // destory and delete all apples graphics
    for (let i = 0; i < this.apples_spawned.length; i++) {
      this.apples_spawned[i].destroy();
      delete this.apples_spawned[i];
    }
    this.apples_spawned = [];
    // destory and delete all body parts
    for (let i = 0; i < this.snake_body.length; i++) {
      this.snake_body[i].destroy();
      delete this.snake_body[i];
    }
    this.snake_body = [];
    // remove all apples
    const my_apples = get_apples_id(this.apples_id);
    remove_apples_id(my_apples);
    // restart the game
    this.make_snake_segment(this.window_width / 2, this.window_height / 2);
    this.make_apple();
  }
}
