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
    draw_none();
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

void ScaleTree::draw_none() {
  // draw 5 options when clicked select the tree to display
  Color baseColor = clouds;
  Color highlighted = asbestos;

  Color backgroundColor = wet_asphalt;
  Rectangle backgroundRect = {750, 750, 350, 350};
  DrawRectangleRec(backgroundRect, backgroundColor);

  Rectangle conquestRect = {800, 800, 100, 100};
  if (CheckCollisionPointRec(GetMousePosition(), conquestRect)) {
    if (IsMouseButtonPressed(MOUSE_LEFT_BUTTON)) {
      treePicked = conquest;
    }
    DrawTexturePro(conquestTex, {0, 0, 8, 8}, conquestRect, {0, 0}, 0,
                   highlighted);
  } else {
    DrawTexturePro(conquestTex, {0, 0, 8, 8}, conquestRect, {0, 0}, 0,
                   baseColor);
  }

  Rectangle consumptionRect = {950, 800, 100, 100};
  if (CheckCollisionPointRec(GetMousePosition(), consumptionRect)) {
    if (IsMouseButtonPressed(MOUSE_LEFT_BUTTON)) {
      treePicked = consumption;
    }
    DrawTexturePro(consumptionTex, {0, 0, 8, 8}, consumptionRect, {0, 0}, 0,
                   highlighted);
  } else {
    DrawTexturePro(consumptionTex, {0, 0, 8, 8}, consumptionRect, {0, 0}, 0,
                   baseColor);
  }

  Rectangle expansionRect = {800, 950, 100, 100};
  if (CheckCollisionPointRec(GetMousePosition(), expansionRect)) {
    if (IsMouseButtonPressed(MOUSE_LEFT_BUTTON)) {
      treePicked = expansion;
    }
    DrawTexturePro(expansionTex, {0, 0, 8, 8}, expansionRect, {0, 0}, 0,
                   highlighted);
  } else {
    DrawTexturePro(expansionTex, {0, 0, 8, 8}, expansionRect, {0, 0}, 0,
                   baseColor);
  }

  Rectangle growthRect = {950, 950, 100, 100};
  if (CheckCollisionPointRec(GetMousePosition(), growthRect)) {
    if (IsMouseButtonPressed(MOUSE_LEFT_BUTTON)) {
      treePicked = growth;
    }
    DrawTexturePro(growthTex, {0, 0, 8, 8}, growthRect, {0, 0}, 0, highlighted);
  } else {
    DrawTexturePro(growthTex, {0, 0, 8, 8}, growthRect, {0, 0}, 0, baseColor);
  }
}

void ScaleTree::draw_conquest() {}

void ScaleTree::draw_consumption() {}

void ScaleTree::draw_expansion() {}

void ScaleTree::draw_growth() {}

void ScaleTree::draw_knowledge() {}