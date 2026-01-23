#include "scale_tree.hpp"
#include "common.hpp"

ScaleTree::ScaleTree() {
  Image image;
  image = LoadImage("resources/tree_images/conquest.png");
  ImageResize(&image, 100, 100);
  conquestTex = LoadTextureFromImage(image);
  UnloadImage(image);
  image = LoadImage("resources/tree_images/consumption.png");
  ImageResize(&image, 100, 100);
  consumptionTex = LoadTextureFromImage(image);
  UnloadImage(image);
  image = LoadImage("resources/tree_images/expansion.png");
  ImageResize(&image, 100, 100);
  expansionTex = LoadTextureFromImage(image);
  UnloadImage(image);
  image = LoadImage("resources/tree_images/growth.png");
  ImageResize(&image, 100, 100);
  growthTex = LoadTextureFromImage(image);
  UnloadImage(image);
  image = LoadImage("resources/tree_images/knowledge.png");
  ImageResize(&image, 100, 100);
  knowledgeTex = LoadTextureFromImage(image);
  UnloadImage(image);
}

void ScaleTree::draw() {
  switch (treePicked) {
  case none:
    // draw 5 options when clicked select the tree to display
    DrawTexture(conquestTex, 800, 800, WHITE);
    DrawTexture(consumptionTex, 900, 800, WHITE);
    DrawTexture(expansionTex, 800, 900, WHITE);
    DrawTexture(growthTex, 900, 900, WHITE);
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