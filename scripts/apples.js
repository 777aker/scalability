import { applyMatrix, Graphics } from "pixi.js";
import { GameWindow } from "./window";
import { COLORS } from "./constants";

var apples_list = [];
var apples_limit = [];
var apples_icons = [];

/**
 * Register a new games apple tracker
 * @param {int} amount - amount of apples to initialize with
 * @param {file} icon - icon to display with these apples
 * @param {int} limit - how many apples this game can hold
 * @returns - an id the game can use to add, remove, and get it's apples
 */
export function register_apples(amount, icon, limit) {
  apples_list.push(amount);
  apples_icons.push(icon);
  apples_limit.push(limit);
  return apples_list.length - 1;
}

/**
 * Add apples with an id
 * @param {int} amount - apples to add
 * @param {int} id - id to add to
 */
export function add_apples_id(amount, id) {
  apples_list[id] += amount;
  if (apples_list[id] >= apples_limit[id]) {
    apples_list[id] = apples_limit[id];
  }
}

/**
 *
 * @param {int} amount - apples to remove
 * @param {int} id - id of apples to remove from
 * @returns - how many apples were actually removed (ie: not enough totally)
 */
export function remove_apples_id(amount, id) {
  apples_list[id] -= amount;
  if (apples_list[id] < 0) {
    const overflow = apples_list[id];
    apples_list[id] = 0;
    return amount + overflow;
  }
  return amount;
}

/**
 * Remove apples evenly from all games
 * @param {int} amount - apples to remove
 * @returns - how many apples were actually removed (ie: not enough totally)
 */
export function remove_apples(amount) {
  let amount_left = amount;
  let non_empty_ids = apples_list.slice();
  while (amount_left > 0 && non_empty_ids.length != 0) {
    const amount_to_remove = Math.ceil(
      amount_left / (apples_list.length - empty_ids.length)
    );
    for (let i = 0; i < non_empty_ids.length; i++) {
      const removed = remove_apples(amount_to_remove, non_empty_ids[i]);
      if (removed != amount_to_remove) {
        non_empty_ids.slice(i, 1);
      }
      amount_left -= removed;
    }
  }
  return amount - amount_left;
}

/**
 * Use id to get a game's apples
 * @param {int} id - get specific apples
 */
export function get_apples_id(id) {
  return apples_list[id];
}

/**
 * Get total amount of apples
 */
export function get_apples() {
  const total_apples = apples_list.reduce(
    (accumulator, cur_value) => accumulator + cur_value,
    0
  );
  return total_apples;
}

/**
 * Increase the limit of apples id can hold
 * @param {int} amount - how many more apples it can hold
 * @param {int} id - id to update
 */
export function increase_apples_limit_id(amount, id) {
  apples_limit[id] += amount;
}

/**
 * Decrease the limit of apples id can hold
 * @param {int} amount - how many less apples it can hold
 * @param {int} id - id to update
 */
export function decrease_apples_limit_id(amount, id) {
  apples_limit[id] -= amount;
  if (apples_limit[id] < 0) {
    apples_limit[id] = 0;
  }
}

export class ApplesDisplay extends GameWindow {
  constructor(app) {
    super(50, 50, 250, 250, COLORS.deep_koamaru, COLORS.exodus_fruit, app);

    this.apples_display_time = 0;
    this.apples_display_update_speed = 50;
    this.apples_over_time = [0];
    this.apples_time_tracker = [0];
    this.plot_graphics = new Graphics();
    this.window.addChild(this.plot_graphics);
    this.x_plot_border = 20;
    this.y_plot_border = 20;

    this.pixi_app.ticker.add((ticker) => {
      this.tick_window(ticker);
    });
  }

  tick_window(ticker) {
    this.apples_display_time += ticker.deltaTime;
    if (this.apples_display_time < this.apples_display_update_speed) {
      return;
    }

    this.apples_display_time = 0;
    // add new value to food
    const current_apples = get_apples();
    if (
      current_apples != this.apples_over_time[this.apples_over_time.length - 1]
    ) {
      this.apples_over_time.push(current_apples);
      this.apples_time_tracker.push(1);
    } else {
      this.apples_time_tracker[this.apples_time_tracker.length - 1] += 1;
    }

    // get max apple for setting y
    let apples_max = this.apples_over_time.reduce(
      (a, b) => Math.max(a, b),
      -Infinity
    );
    if (apples_max == 0) {
      apples_max = 1;
    }

    let total_time = this.apples_time_tracker.reduce(
      (prev, cur) => prev + cur,
      0
    );

    this.plot_graphics.clear();

    let previous_x = this.x_plot_border;
    let previous_y = this.window_height - this.y_plot_border;
    previous_y -=
      (this.apples_over_time[0] / apples_max) *
      (this.window_height - this.y_plot_border * 2);
    // iterate over all the food values
    for (let i = 0; i < this.apples_over_time.length; i++) {
      this.plot_graphics.moveTo(previous_x, previous_y);
      previous_x +=
        (this.apples_time_tracker[i] / total_time) *
        (this.window_width - this.x_plot_border * 2);
      previous_y = this.window_height - this.y_plot_border;
      previous_y -=
        (this.apples_over_time[i] / apples_max) *
        (this.window_height - this.y_plot_border * 2);

      this.plot_graphics.lineTo(previous_x, previous_y);
    }
    this.plot_graphics.stroke({ width: 2, color: COLORS.carmine_pink });
  }
}
