#include "window.hpp"

ApplesManager::ApplesManager() {}

int ApplesManager::registerApplesID() {
  apples.push_back(0);
  return apples.size() - 1;
}

void ApplesManager::AddApplesID(int id, int amount) { apples[id] += amount; }

void ApplesManager::RemoveApplesID(int id, int amount) {
  apples[id] -= amount;
  if (apples[id] < 0)
    apples[id] = 0;
}

void ApplesManager::RemoveApples(int amount) {
  int apples_to_remove = amount;
  int apples_zeroed = 0;
  while (apples_to_remove > 0 && apples_zeroed != apples.size()) {
    int try_remove = amount / (apples.size() - apples_zeroed);
    for (int &app : apples) {
      if (app >= try_remove) {
        app -= try_remove;
        apples_to_remove -= try_remove;
      } else {
        apples_to_remove -= app;
        app = 0;
        apples_zeroed += 1;
      }
    }
  }
}

void ApplesManager::RemoveAllApplesID(int id) { apples[id] = 0; }

void ApplesManager::RemoveAllApples() {
  for (int &app : apples) {
    app = 0;
  }
}

int ApplesManager::GetApplesID(int id) { return apples[id]; }

int ApplesManager::GetApples() {
  int total = 0;
  for (int app : apples) {
    total += app;
  }
  return total;
}

ApplesDisplay::ApplesDisplay()
    : Window("Apples", 400, 400, 100, 100, midnight_blue) {}

void ApplesDisplay::draw() {}