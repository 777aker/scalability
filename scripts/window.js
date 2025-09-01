import { Application, ColorMatrixFilter, Graphics } from "pixi.js";
import { Button } from "@pixi/ui";
import { get_mouse } from "./main";

export class Window {
  constructor(x, y, width, height, bg_color, st_color, app) {
    this.window_width = width;
    this.window_height = height;
    this.pixi_app = app;
    this.window_dragging = false;
    this.window_bg_color = bg_color;

    this.window = new Graphics()
      .rect(0, 0, this.window_width, this.window_height)
      .fill(bg_color)
      .stroke(st_color)
      .setStrokeStyle(5);
    this.pixi_app.stage.addChild(this.window);
    
    this.window_bar_btn = new Button(
      new Graphics()
      .rect(0, 0, this.window_width * 0.9, this.window_height * 0.1)
      .fill(bg_color)
      .stroke(st_color)
      .setStrokeStyle(5)
    );
    this.window.addChild(this.window_bar_btn.view);
    this.window_bar_btn.onDown.connect(() => this.dragging_window(true));
    this.window_bar_btn.onUp.connect(() => this.dragging_window(false));
    const dragging_filter = new ColorMatrixFilter();
    this.window_bar_btn.view.filters = [dragging_filter];
    
    this.window_close_btn = new Button(
      new Graphics()
      .rect(this.window_width * 0.9, 0, this.window_width * 0.1, this.window_height * 0.1)
      .fill(0xc0392b)
      .stroke(st_color)
      .setStrokeStyle(5)
    );
    this.window.addChild(this.window_close_btn.view);
    this.window_close_btn.onPress.connect(this.close_window);

    this.window.position.set(x, y)
  }

  move_window(x, y) {
    this.window.position.set(x, y);
  }

  dragging_window(pressed) {
    this.window_dragging = pressed;
    if(this.window_dragging) {
      this.window_bar_btn.view.filters[0].brightness(1.2);
    } else {
      this.window_bar_btn.view.filters[0].brightness(1);
    }
  }

  close_window() {
    console.log("Closed pressed");
  }

  draw_window() {
    if(this.window_dragging) {
      this.window.position.copyFrom(get_mouse());
    }
  }
}
