#pragma once

#include <string>
#include <vector>

struct ScaleNode {
  float posx, posy;
  int applesCost;
  std::string iconPath;
  std::vector<std::string> requiredNodes;
  void (*nodeUnlockedCallback)();
  bool unlocked;
};