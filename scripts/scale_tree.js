import { Application } from "pixi.js";
import { COLORS } from "./constants";
import { GameWindow } from "./window";

/**
 * Class for the nodes in the growth path tree
 */
class TreeNode {
  constructor(app, x, y, cost, clicked_function) {
    this.pixi_app = app;
  }

  /**
   * when hovered highlight the node if you can afford it
   */
  hovered() {}

  /**
   * update this nodes stuff
   */
  draw() {}

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
  // Each tree holds bought, available, draw, unseen
  // bought the player has gotten
  // available the player can buy if they have enough apples
  // draw is just nodes that they can get in the future to draw
  // unseen is nodes the player can't see yet

  init_consumption() {
    // init bought, available, draw, unseen
  }

  init_expansion() {
    // init bought, available, draw, unseen
  }

  init_knowledge() {
    // init bought, available, draw, unseen
  }

  init_growth() {
    // init bought, available, draw, unseen
  }

  init_conquest() {
    // init bought, available, draw, unseen
  }

  init_final() {
    // init bought, available, draw, unseen
  }
}
