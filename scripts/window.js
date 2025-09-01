import { Application, ColorMatrixFilter, Graphics } from "pixi.js";
import { Button } from "@pixi/ui";
import { get_mouse } from "./main";

// Base class for windows
export class Window {
  // constructor creates window rect, closing square, and draggable top area
  constructor(x, y, width, height, bg_color, st_color, app) {
    // Set class variables
    this.window_width = width;
    this.window_height = height;
    this.pixi_app = app;
    this.window_dragging = false;
    this.window_bg_color = bg_color;

    // create the window rect
    this.window = new Graphics()
      .rect(0, 0, this.window_width, this.window_height)
      .fill(bg_color)
      .stroke(st_color)
      .setStrokeStyle(5);
    this.pixi_app.stage.addChild(this.window);

    // button that allows for dragging the window
    // maybe should just be a graphics object with mouse interaction?
    this.window_bar_btn = new Button(
      new Graphics()
        .rect(0, 0, this.window_width * 0.9, this.window_height * 0.1)
        .fill(bg_color)
        .stroke(st_color)
        .setStrokeStyle(5)
    );
    this.window.addChild(this.window_bar_btn.view);
    // connect dragging functions
    this.window_bar_btn.onDown.connect(() => this.dragging_window(true));
    this.window_bar_btn.onUp.connect(() => this.dragging_window(false));
    const dragging_filter = new ColorMatrixFilter();
    this.window_bar_btn.view.filters = [dragging_filter];

    // add close window button
    this.window_close_btn = new Button(
      new Graphics()
        .rect(
          this.window_width * 0.9,
          0,
          this.window_width * 0.1,
          this.window_height * 0.1
        )
        .fill(0xc0392b)
        .stroke(st_color)
        .setStrokeStyle(5)
    );
    this.window.addChild(this.window_close_btn.view);
    this.window_close_btn.onPress.connect(() => {
      this.close_window(this);
      this.close_window_super(this);
    });

    this.window.position.set(x, y);

    // done initializing start the ticker
    this.pixi_app.ticker.add((ticker) => {
      this.tick_window_super(ticker);
      this.tick_window(ticker);
    });
  }

  // function for moving the window to x, y, centered around draggable window bar
  move_window(x, y) {
    this.window.position.set(
      x - this.window_width / 2,
      y - this.window_height * 0.05
    );
  }

  // function for what to do when we've started or stopped dragging a window
  dragging_window(pressed) {
    this.window_dragging = pressed;
    if (this.window_dragging) {
      this.window_bar_btn.view.filters[0].brightness(1.2);
    } else {
      this.window_bar_btn.view.filters[0].brightness(1);
    }
  }

  // function for closing a window
  close_window_super(window_obj) {
    console.log("Closed pressed");
  }

  // what to do on a game tick
  tick_window_super(ticker) {
    // if dragging the window move it
    if (this.window_dragging) {
      const mouse = get_mouse();
      this.move_window(mouse.x, mouse.y);
    }
  }

  /**
   * Methods implemented by child classes
   */

  // How to handle closing the window
  close_window(window_obj) {
    console.log("Close window not implemented by inherited class");
  }

  // What to do each game tick
  tick_window(ticker) {
    console.log("Tick window not implemented by inherited class");
  }
}
