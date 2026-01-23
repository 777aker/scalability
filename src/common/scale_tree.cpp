#include "scale_tree.hpp"
#include "common.hpp"

ScaleTree::ScaleTree() {}

void ScaleTree::draw() {
  switch (treePicked) {
  case none:
    break;
  case conquest:
    draw_conquest();
    break;
  case consumption:
    draw_consumption();
    break;
  case expansion:
    draw_expansion();
    break;
  case growth:
    draw_growth();
    break;
  case knowledge:
    draw_knowledge();
    break;
  }
}

void ScaleTree::draw_conquest() {}

void ScaleTree::draw_consumption() {}

void ScaleTree::draw_expansion() {}

void ScaleTree::draw_growth() {}

void ScaleTree::draw_knowledge() {}