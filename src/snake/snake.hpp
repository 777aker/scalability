#pragma once

#include "window/window.hpp"

class Snake : public Window {
public:
  Snake(int txpos, int typos)
      : Window("Snake", 400, 400, txpos, typos, midnight_blue){};
  void draw();
};