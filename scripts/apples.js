import { applyMatrix } from "pixi.js";

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
