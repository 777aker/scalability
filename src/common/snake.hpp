#pragma once

#include <vector>

#include "common.hpp"

class Snake : public Window {
public:
  Snake(int txpos, int typos);
  void draw();

private:
  int make_new_apples = 5;
  void restart();
  std::vector<Rectangle> snake_body = {};
  Vector2 snake_dir = {0, 1};
  float time_passed = 0;
  float snake_speed = 1;
  float snake_size = 20;
  std::vector<Rectangle> apples = {};
  int snake_length = 1;
};