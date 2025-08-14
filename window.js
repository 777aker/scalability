import { Application, Graphics } from "pixi.js";

export class Window {
  constructor(x, y, width, height, bg_color, st_color, app) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.app = app;
    const window_control = new Graphics()
      .rect(x, y, width, height * 0.1)
      .fill(bg_color)
      .stroke(st_color)
      .setStrokeStyle(5);
    app.stage.addChild(window_control);
    const window_x = new Graphics()
      .rect(x + width - height * 0.1, y, height * 0.1, height * 0.1)
      .fill(bg_color)
      .stroke(st_color)
      .setStrokeStyle(5);
    app.stage.addChild(window_x);

    const window_rect = new Graphics()
      .rect(x, y + height * 0.1, width, height * 0.9)
      .fill(bg_color)
      .stroke(st_color)
      .setStrokeStyle(5);
    app.stage.addChild(window_rect);
  }

  draw_window() {}
}
