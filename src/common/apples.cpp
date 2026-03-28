#include "common.hpp"

#include <iostream>

ApplesManager::ApplesManager() {}

int ApplesManager::registerApplesID() {
  apples.push_back(0);
  return apples.size() - 1;
}

void ApplesManager::addApplesID(int id, int amount) { apples[id] += amount; }

void ApplesManager::removeApplesID(int id, int amount) {
  apples[id] -= amount;
  if (apples[id] < 0)
    apples[id] = 0;
}

void ApplesManager::removeApples(int amount) {
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

void ApplesManager::removeAllApplesID(int id) { apples[id] = 0; }

void ApplesManager::removeAllApples() {
  for (int &app : apples) {
    app = 0;
  }
}

int ApplesManager::getApplesID(int id) { return apples[id]; }

int ApplesManager::getApples() {
  int total = 0;
  for (int app : apples) {
    total += app;
  }
  return total;
}

ApplesDisplay::ApplesDisplay()
    : Window("Apples", 400, 400, 100, 100, midnight_blue) {}

void ApplesDisplay::draw() {
  time_since_record += GetFrameTime();
  if (time_since_record >= record_time) {
    time_since_record = 0;
    if (apples_record.size() >= 100) {
      apples_record.erase(apples_record.begin());
      apples_record.push_back(applesManager.getApples());
    } else {
      apples_record.push_back(applesManager.getApples());
    }
    if (applesManager.getApples() > max_apples) {
      max_apples = applesManager.getApples();
    }
  }

  float x_size = (window_rect.width - 20) / apples_record.size();
  Color line_color = emerald;
  for (int i = 0; i < (int)apples_record.size() - 1; i++) {
    if (apples_record[i] < apples_record[i + 1]) {
      line_color = emerald;
    } else if (apples_record[i] > apples_record[i + 1]) {
      line_color = pomegranate;
    }
    DrawLine(10 + i * x_size + window_rect.x,
             window_rect.y - 10 + window_rect.height -
                 (apples_record[i] / max_apples) * (window_rect.height - 20),
             10 + (i + 1) * x_size + window_rect.x,
             window_rect.y - 10 + window_rect.height -
                 (apples_record[i + 1] / max_apples) *
                     (window_rect.height - 20),
             line_color);
  }
}