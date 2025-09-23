import { Application, Graphics, RenderLayer } from "pixi.js";
import { COLORS } from "./constants";
import { GameWindow } from "./window"; // unused but needed for imports to see GameWindow class
import { SnakeGame } from "./snake";
import { ApplesDisplay } from "./apples";

// global variable storing mouse so everyone can see where it is
var mouse_global;

// global getter for mouse position
export function get_mouse() {
  return mouse_global;
}

var key_list = [];

// get all the keys that are currently pressed
export function get_keys_pressed() {
  return key_list;
}

/**
 * Key was pressed down add to keys pressed list
 * @param {event} event
 * @returns
 */
function keydown(event) {
  if (key_list.indexOf(event.key) !== -1) {
    return;
  }
  key_list.push(event.key);
}

/**
 * Key event was released remove from keys pressed list
 * @param {event} event
 */
function keyup(event) {
  const index = key_list.indexOf(event.key);
  if (index !== -1) {
    key_list.splice(index, 1);
  }
}

/**
 * sleep for ms, usage 'await sleep(ms);'
 * @param {int} ms
 * @returns
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// start pixijs application
(async () => {
  // init app
  const app = new Application();
  await app.init({
    resizeTo: window,
    antialias: true,
    backgroundColor: COLORS.wizard_grey,
  });

  // set app properties
  app.canvas.style.position = "absolute";
  document.body.appendChild(app.canvas);
  app.stage.eventMode = "static";
  // app.ticker.maxFPS = 30;
  // app.ticker.minFPS = 30;
  app.stage.addEventListener("pointermove", (e) => {
    mouse_global = e.global;
  });
  window.addEventListener("keydown", keydown);
  window.addEventListener("keyup", keyup);
  app.stage.sortableChildren = true;

  // initialize snake game
  const snake_game = new SnakeGame(app);
  await sleep(10000);
  const apple_display = new ApplesDisplay(app);
})();
