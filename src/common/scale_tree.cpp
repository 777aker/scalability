#include "scale_tree.hpp"
#include "../conquest/conquest_nodes.hpp"
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
      unload_textures();
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
      unload_textures();
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
      unload_textures();
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
      unload_textures();
    }
    DrawTexturePro(growthTex, {0, 0, 8, 8}, growthRect, {0, 0}, 0, highlighted);
  } else {
    DrawTexturePro(growthTex, {0, 0, 8, 8}, growthRect, {0, 0}, 0, baseColor);
  }
}

void ScaleTree::unload_textures() {
  UnloadTexture(conquestTex);
  UnloadTexture(consumptionTex);
  UnloadTexture(expansionTex);
  UnloadTexture(growthTex);
  UnloadTexture(knowledgeTex);
}

void ScaleTree::draw_a_tree(std::map<std::string, ScaleNode> treeMap) {
  const float node_radius = 25;
  const Color node_locked = black;
  const Color node_unlockable = asbestos;
  const Color node_hovered = clouds;
  const Color node_unlocked = nephritis;
  const float node_line_thickness = 5;

  // TODO: I hate how this had to be done with two of the same for loops
  // figure out something better
  for (auto &node : treeMap) {
    bool requirementsMet = true;
    // get if requirements for node met
    for (std::string required : node.second.requiredNodes) {
      if (!treeMap[required].unlocked) {
        requirementsMet = false;
      }
    }
    // get what color the node should be
    Color node_color = node_locked;
    if (node.second.unlocked) {
      node_color = node_unlocked;
    } else if (applesManager.getApples() >= node.second.applesCost &&
               requirementsMet) {
      Vector2 center = {node.second.posx, node.second.posy};
      if (CheckCollisionPointCircle(GetMousePosition(), center, node_radius)) {
        if (IsMouseButtonPressed(MOUSE_LEFT_BUTTON)) {
          node.second.unlocked = true;
          node_color = node_unlocked;
          applesManager.removeApples(node.second.applesCost);
        } else {
          node_color = node_hovered;
        }
      } else {
        node_color = node_unlockable;
      }
    }
    // draw the lines for requirements
    for (std::string required : node.second.requiredNodes) {
      Vector2 start = {node.second.posx, node.second.posy};
      Vector2 end = {treeMap[required].posx, treeMap[required].posy};
      Color line_color = node_color;
      if (line_color == node_locked) {
        if (treeMap[required].unlocked) {
          line_color = node_unlocked;
        }
      }
      DrawLineEx(start, end, node_line_thickness, line_color);
    }
  }

  for (auto &node : treeMap) {
    bool requirementsMet = true;
    // get if requirements for node met
    for (std::string required : node.second.requiredNodes) {
      if (!treeMap[required].unlocked) {
        requirementsMet = false;
      }
    }
    // get what color the node should be
    Color node_color = node_locked;
    if (node.second.unlocked) {
      node_color = node_unlocked;
    } else if (applesManager.getApples() >= node.second.applesCost &&
               requirementsMet) {
      Vector2 center = {node.second.posx, node.second.posy};
      if (CheckCollisionPointCircle(GetMousePosition(), center, node_radius)) {
        if (IsMouseButtonPressed(MOUSE_LEFT_BUTTON)) {
          node.second.unlocked = true;
          node_color = node_unlocked;
          applesManager.removeApples(node.second.applesCost);
        } else {
          node_color = node_hovered;
        }
      } else {
        node_color = node_unlockable;
      }
    }
    // draw the node
    DrawCircle(node.second.posx, node.second.posy, node_radius, node_color);
  }
}

void ScaleTree::draw_conquest() { draw_a_tree(conquestNodes); }

void ScaleTree::draw_consumption() {}

void ScaleTree::draw_expansion() {}

void ScaleTree::draw_growth() {}

void ScaleTree::draw_knowledge() {}