#pragma once

#include "raylib.h"

#include <string>
#include <vector>

// colors
const Color turquoise = {26, 188, 156, 255};   // rgb(26, 188, 156)
const Color green_sea = {22, 160, 133, 255};   // rgb(22, 160, 133)
const Color emerald = {46, 204, 113, 255};     // rgb(46, 204, 113)
const Color nephritis = {39, 174, 96, 255};    // rgb(39, 174, 96)
const Color wet_asphalt = {52, 73, 94, 255};   // rgb(52, 73, 94)
const Color midnight_blue = {44, 62, 80, 255}; // rgb(44, 62, 80)
const Color sunflower = {241, 196, 15, 255};   // rgb(241, 196, 15)
const Color carrot = {230, 126, 34, 255};      // rgb(230, 126, 34)
const Color pumpkin = {211, 84, 0, 255};       // rgb(211, 84, 0)
const Color alizarin = {231, 76, 60, 255};     // rgb(231, 76, 60)
const Color pomegranate = {192, 57, 43, 255};  // rgb(192, 57, 43)
const Color clouds = {236, 240, 241, 255};     // rgb(236, 240, 241)
const Color concrete = {127, 140, 141, 255};   // rgb(127, 140, 141)
const Color asbestos = {127, 140, 141, 255};   // rgb(127, 140, 141)
const Color black = {0, 0, 0, 255};            // rgb(0, 0, 0)

// extra operator for colors to make life easier
Color operator+(const Color &lhs, const Color &rhs);
Color operator-(const Color &lhs, const Color &rhs);
bool operator==(const Color &lhs, const Color &rhs);

// base class that makes a window for a game
class Window {
public:
  Window(std::string window_title, float width, float height, float xpos,
         float ypos, Color window_background);

  void draw_window();
  virtual void draw() = 0;
  Rectangle window_rect;

protected:
  std::string title;
  Color background;
  bool dragging = false;
  int apples_id;

private:
  Color highlight = {20, 20, 20, 0};
};

// manages how many apples we have
class ApplesManager {
public:
  ApplesManager();
  int registerApplesID();
  void addApplesID(int id, int amount);
  void removeApplesID(int id, int amount);
  void removeApples(int amount);
  void removeAllApplesID(int id);
  void removeAllApples();
  int getApplesID(int id);
  int getApples();

private:
  std::vector<int> apples = {};
};

class ApplesDisplay : public Window {
public:
  ApplesDisplay();
  void draw();

private:
  std::vector<float> apples_record = {};
  int apples_position = 0;
  float record_time = 1;
  float time_since_record = 0;
  float max_apples = 1;
};

// global variables for managing stuff
extern std::vector<Window *> windows;
extern Window *top_mouse_over;
extern ApplesManager applesManager;