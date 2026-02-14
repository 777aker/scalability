#pragma once

#include <string>
#include <vector>

struct ScaleNode {
  int posx, posy;
  std::string name;
  int applesCost;
  std::string iconPath;
  std::vector<std::string> requiredNodes;
  void (*nodeUnlockedCallback)();
};