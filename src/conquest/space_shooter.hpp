#pragma once

#include "../common/common.hpp"

class SpaceShooter : public Window {
public:
  SpaceShooter(int windowx, int windowy);
  void draw();

private:
  void restart();
  Rectangle ship;
}