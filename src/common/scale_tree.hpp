#pragma once

#include "raylib.h"

// shows upgrades
class ScaleTree {
public:
  ScaleTree();
  void draw();

private:
  enum Trees {
    none,
    conquest,
    consumption,
    expansion,
    growth,
    knowledge,
  };
  Trees treePicked = none;
  void draw_none();
  void unload_textures();
  void draw_conquest();
  Texture2D conquestTex;
  void draw_consumption();
  Texture2D consumptionTex;
  void draw_expansion();
  Texture2D expansionTex;
  void draw_growth();
  Texture2D growthTex;
  void draw_knowledge();
  Texture2D knowledgeTex;
};
