#include "snake/snake.hpp"

#include <algorithm>

Snake::Snake(int txpos, int typos)
    : Window("Snake", 400, 400, txpos, typos, midnight_blue) {
  restart();
};

void Snake::restart() {
  snake_body.clear();
  apples.clear();
  applesManager.removeAllApplesID(apples_id);

  time_passed = 0;
  snake_length = 1;
  Rectangle head = {window_rect.width / 2, window_rect.height / 2, snake_size,
                    snake_size};
  snake_body.push_back(head);
  make_new_apples = 5;
}

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

    bool restarted = false;
    for (Rectangle &body : snake_body) {
      if (CheckCollisionRecs(body, head)) {
        restart();
        restarted = true;
      }
    }
    if (head.x < 0 || head.x >= window_rect.width || head.y < 0 ||
        head.y >= window_rect.height) {
      restart();
      restarted = true;
    }

    if (!restarted)
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
    Rectangle apple = {
        (float)(std::rand() % (int)(window_rect.width - snake_size)),
        (float)(std::rand() % (int)(window_rect.height - snake_size)),
        snake_size, snake_size};
    apples.push_back(apple);
    make_new_apples -= 1;
  }
  for (Rectangle &apple : apples) {
    if (CheckCollisionRecs(apple, head)) {
      apple.x = -100;
      apple.y = -100;
      make_new_apples += 1;
      snake_length += 1;
      applesManager.addApplesID(apples_id, 1);
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