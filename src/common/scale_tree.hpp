#pragma once

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
  void draw_conquest();
  void draw_consumption();
  void draw_expansion();
  void draw_growth();
  void draw_knowledge();
};
