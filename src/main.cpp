/*
Raylib example file.
This is an example main file for a simple raylib project.
Use this as a starting point or replace it with your code.

by Jeffery Myers is marked with CC0 1.0. To view a copy of this license, visit
https://creativecommons.org/publicdomain/zero/1.0/

*/

#include "raylib.h"

#include "resource_dir.h" // utility header for SearchAndSetResourceDir

#include "snake/snake.hpp"
#include "window/window.hpp"

std::vector<Window *> windows = {};
Window *top_mouse_over = nullptr;
ApplesManager applesManager;

int main() {
  // Tell the window to use vsync and work on high DPI displays
  SetConfigFlags(FLAG_VSYNC_HINT | FLAG_WINDOW_HIGHDPI |
                 FLAG_WINDOW_TRANSPARENT | FLAG_WINDOW_RESIZABLE);

  // Create the window and OpenGL context
  InitWindow(1280, 800, "Scalability");

  // Utility function from resource_dir.h to find the resources folder and set
  // it as the current working directory so we can load from it
  SearchAndSetResourceDir("resources");

  applesManager = ApplesManager();

  ApplesDisplay applesDisplay;
  windows.push_back((Window *)&applesDisplay);
  Snake snake1(200, 200);
  windows.push_back((Window *)&snake1);
  Snake snake2(150, 400);
  windows.push_back((Window *)&snake2);

  // game loop
  while (!WindowShouldClose()) // run the loop until the user presses ESCAPE or
                               // presses the Close button on the window
  {
    if (IsKeyPressed(KEY_ESCAPE))
      break;
    if (IsKeyPressed(KEY_F11))
      ToggleFullscreen();

    BeginDrawing();
    // Setup the back buffer for drawing (clear color and depth buffers)
    ClearBackground(BLANK);

    // get the top level window, and if the window was clicked on move it to top
    // of pecking order
    for (int i = windows.size() - 1; i >= 0; i--) {
      if (CheckCollisionPointRec(GetMousePosition(), windows[i]->window_rect)) {
        top_mouse_over = windows[i];
        if (IsMouseButtonPressed(MOUSE_BUTTON_LEFT)) {
          Window *temp = windows[i];
          windows.erase(windows.begin() + i);
          windows.push_back(std::move(temp));
        }
        break;
      }
    }

    // call all the windows draw functions
    for (Window *window : windows) {
      window->draw_window();
      window->draw();
    }

    // end the frame and get ready for the next one  (display frame, poll input,
    // etc...)
    EndDrawing();
  }

  // destroy the window and cleanup the OpenGL context
  CloseWindow();
  return 0;
}
