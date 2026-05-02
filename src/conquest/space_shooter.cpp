#include "space_shooter.hpp"

SpaceShooter::SpaceShooter(int txpos, int typos)
    : Window("Space Shooter", 400, 400, txpos, typos, midnight_blue) {
  restart();
}

void SpaceShooter::draw() {}

void SpaceShooter::restart() {}