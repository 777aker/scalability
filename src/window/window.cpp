#include "window.hpp"

Color operator+(const Color &lhs, const Color &rhs) {
  Color sum;
  sum.r = lhs.r + rhs.r;
  sum.g = lhs.g + rhs.g;
  sum.b = lhs.b + rhs.b;
  sum.a = lhs.a + rhs.a;
  return sum;
}

Color operator-(const Color &lhs, const Color &rhs) {
  Color sum;
  sum.r = lhs.r - rhs.r;
  sum.g = lhs.g - rhs.g;
  sum.b = lhs.b - rhs.b;
  sum.a = lhs.a - rhs.a;
  return sum;
}

Window::Window(std::string window_title, float width, float height, float xpos,
               float ypos, Color window_background)
    : title(window_title), background(window_background) {
  window_rect = {xpos, ypos, width, height};
}

void Window::draw_window() {
  Rectangle title_bar = window_rect;
  title_bar.height = 40;
  if (dragging) {
    window_rect.x = GetMousePosition().x - title_bar.width / 2;
    window_rect.y = GetMousePosition().y - title_bar.height / 2;
    if (IsMouseButtonUp(MOUSE_BUTTON_LEFT)) {
      dragging = false;
    }
  }
  DrawRectangleRec(window_rect, background);

  if (top_mouse_over == this &&
      CheckCollisionPointRec(GetMousePosition(), title_bar)) {
    if (IsMouseButtonDown(MOUSE_BUTTON_LEFT)) {
      dragging = true;
    }
    DrawRectangleRec(title_bar, background + highlight);
  } else {
    DrawRectangleRec(title_bar, background - highlight);
  }
}