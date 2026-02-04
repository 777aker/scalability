#include "scale_tree.hpp"
#include "common.hpp"

ScaleTree::ScaleTree() {
  Image image;
  image = LoadImage("tree_images/conquest.png");
  conquestTex = LoadTextureFromImage(image);
  UnloadImage(image);

  image = LoadImage("tree_images/consumption.png");
  consumptionTex = LoadTextureFromImage(image);
  UnloadImage(image);

  image = LoadImage("tree_images/expansion.png");
  expansionTex = LoadTextureFromImage(image);
  UnloadImage(image);

  image = LoadImage("tree_images/growth.png");
  growthTex = LoadTextureFromImage(image);
  UnloadImage(image);

  image = LoadImage("tree_images/knowledge.png");
  knowledgeTex = LoadTextureFromImage(image);
  UnloadImage(image);
}

void ScaleTree::draw() {
  switch (treePicked) {
  case none:
    // draw 5 options when clicked select the tree to display
    DrawTexturePro(conquestTex, {0, 0, 8, 8}, {800, 800, 100, 100}, {0, 0}, 0,
                   WHITE);
    DrawTexturePro(consumptionTex, {0, 0, 8, 8}, {900, 800, 100, 100}, {0, 0},
                   0, WHITE);
    DrawTexturePro(expansionTex, {0, 0, 8, 8}, {800, 900, 100, 100}, {0, 0}, 0,
                   WHITE);
    DrawTexturePro(growthTex, {0, 0, 8, 8}, {900, 900, 100, 100}, {0, 0}, 0,
                   WHITE);
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