#include "snake/snake.hpp"

#include <algorithm>

Snake::Snake(int txpos, int typos)
    : Window("Snake", 400, 400, txpos, typos, midnight_blue) {
  Rectangle head = {window_rect.width / 2, window_rect.height / 2, 20, 20};
  snake_body.push_back(head);
};

void Snake::draw() {
  time_passed += GetFrameTime();
  // figure out head
  Rectangle head = snake_body[snake_body.size() - 1];
  if (time_passed >= snake_speed) {
    time_passed = 0;
    head.x += snake_dir.x * snake_size;
    head.y += snake_dir.y * snake_size;
    if (snake_body.size() >= snake_length) {
      snake_body.erase(snake_body.begin());
    }
    snake_body.push_back(head);
  }

  // body
  for (Rectangle &body : snake_body) {
    Rectangle pos = body;
    pos.x += window_rect.x;
    pos.y += window_rect.y;
    DrawRectangleRec(pos, pomegranate);
  }

  // apple time
  if (make_new_apples) {
    Rectangle apple = {std::rand() % (int)window_rect.width,
                       std::rand() % (int)window_rect.height, 20, 20};
    apples.push_back(apple);
    make_new_apples -= 1;
  }
  for (Rectangle &apple : apples) {
    if (CheckCollisionRecs(apple, head)) {
      apple.x = -100;
      apple.y = -100;
      make_new_apples += 1;
      snake_length += 1;
    } else {
      Rectangle pos = apple;
      pos.x += window_rect.x;
      pos.y += window_rect.y;
      DrawRectangleRec(pos, emerald);
    }
  }
  apples.erase(std::remove_if(apples.begin(), apples.end(),
                              [](Rectangle n) { return n.x < 0 && n.y < 0; }),
               apples.end());

  // change direction
  if (windows[windows.size() - 1] == this) {
    if (IsKeyDown(KEY_W) && snake_dir.y != 1) {
      snake_dir = {0, -1};
    } else if (IsKeyDown(KEY_S) && snake_dir.y != -1) {
      snake_dir = {0, 1};
    } else if (IsKeyDown(KEY_A) && snake_dir.x != 1) {
      snake_dir = {-1, 0};
    } else if (IsKeyDown(KEY_D) && snake_dir.x != -1) {
      snake_dir = {1, 0};
    }
  }
}