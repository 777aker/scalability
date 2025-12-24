// global variable storing mouse so everyone can see where it is
var mouse_global;

// global getter for mouse position
export function get_mouse() {
  return mouse_global;
}

export function update_mouse(new_mouse) {
  mouse_global = new_mouse;
}