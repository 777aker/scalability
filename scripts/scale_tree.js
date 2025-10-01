import { Application } from "pixi.js";
import { COLORS } from "./constants";
import { GameWindow } from "./window";

/**
 * Class for the nodes in the growth path tree
 */
export class TreeNode {
  constructor(app, x, y, cost, clicked_function) {
    this.pixi_app = app;
    this.cost = cost;
    this.clicked_function = clicked_function;
    // spawn node at 0, 0
    // move it to x, y
    // add button when clicked that checks cost, calls buy, then calls clickedd
  }

  /**
   * when hovered highlight the node if you can afford it
   */
  hovered() {}

  /**
   * change a nodes graphic to look like a bought node
   */
  buy() {}

  /**
   * move the node by x, y, stop drawing if out of bounds
   * @param {*} x
   * @param {*} y
   */
  translate(x, y, x_bound, y_bound) {}
}

/**
 * Main window class that's inited
 */
export class ScaleTree extends GameWindow {
  constructor(app) {
    super(100, 400, 300, 300, COLORS.deep_koamaru, COLORS.exodus_fruit, app);

    // six buttons and connect an open tree to each
    // when button pressed remove the six buttons and display the scale tree
    // the knowledge tree and final tree are greyed out by default
    // final tree have to get all other trees
    // knowledge tree you have to do cryptography about it to unlock
  }
}
